const express = require('express')

const db = require('../db/reports')

const router = express.Router()

//  /api/v1/reports/:patientId
router.get('/:patientId', async (req, res) => {
  console.log(1)
  const patientId = req.params.patientId
  console.log(2)
  const reportsIncomp = await db.getReportsById(patientId)
  console.log(3, reportsIncomp)
  const reportsComp = await reportsIncomp.map(async (report) => {
    console.log(4, report.reportId)
    const prescription = await db.getPrescriptionsByReportId(report.reportId)
    console.log(5, prescription)
    return { ...report, prescription }
  })
  const reportPromise = Promise.all(reportsComp)
  console.log(6, reportPromise)
  const resolvedPromise = await reportPromise
  console.log(7, resolvedPromise)
  res.json(resolvedPromise)
  return null
})

module.exports = router
