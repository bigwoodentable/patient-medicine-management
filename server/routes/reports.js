const express = require('express')

const db = require('../db/reports')

const router = express.Router()

//  /api/v1/reports/:patientId

//Using for loop
router.get('/:patientId', async (req, res) => {
  // console.log(1)
  const patientId = req.params.patientId
  // console.log(2)

  try {
    const reportsNoPrescrip = await db.getReportsById(patientId)
    // console.log(3, reportsNoPrescrip)
    const reportsFunc = async (arr = []) => {
      // console.log(4, arr)
      for (const report of reportsNoPrescrip) {
        // console.log('4b arr: ', arr)
        const prescription = await db.getPrescriptionsByReportId(
          report.reportId
        )
        arr.push({ ...report, prescription })
        // console.log('4c arr: ', arr)
      }
      return arr
    }
    const reports = await reportsFunc()
    // console.log(5, reports)
    const reportPromise = Promise.all(reports)
    // console.log(6, reportPromise)
    const resolvedPromise = await reportPromise
    // console.log(7, resolvedPromise)
    res.json(resolvedPromise)
  } catch (error) {
    console.error(`this is ${error}`)
  }
  // console.log(8)
  return null
})

module.exports = router

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
