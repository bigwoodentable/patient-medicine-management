const express = require('express')

const db = require('../db/reports')
const { updateQuantByName } = require('../db/stocks')

const router = express.Router()

//  /api/v1/reports/:patientId

//Using for loop
router.get('/:patientId', async (req, res) => {
  const patientId = req.params.patientId
  try {
    const reportBasics = await db.getReportsById(patientId)
    const reportsFunc = async (arr = []) => {
      for (const report of reportBasics) {
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

router.post('/add/:patientId', async (req, res) => {
  const patientId = req.params.patientId
  const { reportBasics, prescriptions } = req.body

  try {
    const reportId = await db.addReportById(reportBasics, patientId)
    db.addPrescriptionsById(prescriptions, reportId)
    updateQuantByName(prescriptions)

    return res.json('success')
  } catch (error) {
    console.error(error)
  }
})

module.exports = router

//  /api/v1/reports/:patientId
// Using array.map()

// router.get('/:patientId', async (req, res) => {
//   // console.log(1)
//   const patientId = req.params.patientId
//   // console.log(2)

//   try {
//     const reportsIncomp = await db.getReportsById(patientId)
//     console.log(3, reportsIncomp)

//     const reportsComp = reportsIncomp.map(async (report) => {
//       console.log(4, report.reportId)

//       //This await doesn't pause the .map() function, that's why it skips to 6 and 7, but the await for reportPromise, does pause the function, that's why 5 and 5b comes before 8
//       const prescription = await db.getPrescriptionsByReportId(report.reportId)
//       console.log(5, prescription)
//       console.log('5b', reportsComp)
//       return { ...report, prescription }
//     })

//     console.log(6, reportsComp)
//     const reportPromise = Promise.all(reportsComp)
//     console.log(7, reportPromise)

//     const resolvedPromise = await reportPromise
//     console.log(8, resolvedPromise)
//     res.json(resolvedPromise)
//   } catch (error) {
//     console.error(`this is ${error}`)
//   }
//   console.log(9)

//   return null
// })
