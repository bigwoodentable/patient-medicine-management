const express = require("express")

const db = require("../db/reports")
const { updateQuantByName } = require("../db/stocks")

const router = express.Router()

//  /api/v1/reports/:patientId

//Using for loop
//For this particular case, it seems like async await syntax is clearer than .then() syntax
router.get("/:patientId", async (req, res) => {
  const patientId = req.params.patientId
  try {
    const reportBasics = await db.getReportsById(patientId)

    const sortedReportBasics = reportBasics.sort(
      (a, b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded)
    )

    const reportsFunc = async (arr = []) => {
      for (const report of sortedReportBasics) {
        const prescription = await db.getPrescriptionsByReportId(
          report.reportId
        )
        arr.push({ ...report, prescription })
      }
      return arr
    }
    const reports = await reportsFunc()
    const reportPromise = Promise.all(reports)
    const resolvedPromise = await reportPromise
    res.json(resolvedPromise)
  } catch (error) {
    console.error(`this is ${error}`)
  }
  return null
})

//  /api/v1/reports/add/:patientId
router.post("/add/:patientId", async (req, res) => {
  const patientId = req.params.patientId
  const { reportBasics, prescriptions } = req.body
  db.addReportById(reportBasics, patientId)
    .then((reportId) => {
      //postgres syntax
      // db.addPrescriptionsById(prescriptions, reportId[0]["report_id"])
      //sqlite syntax
      db.addPrescriptionsById(prescriptions, reportId)
      updateQuantByName(prescriptions)
      return res.json("success")
    })
    .catch((err) => console.error(err))
})

router.delete("/delete/:reportId", (req, res) => {
  const reportId = req.params.reportId
  db.deleteReportById(reportId)
    .then(() => res.json("success in deleting the report"))
    .catch((err) => console.error(error))
})

module.exports = router
