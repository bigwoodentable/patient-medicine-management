import request from 'superagent'

const rootUrl = '/api/v1/reports'

export function getReportsById(patientId) {
  return request.get(rootUrl + `/${patientId}`).then((res) => res.body)
}

export function addReportById(combinedReport, patientId) {
  const reportBasics = {
    prescription_price: Number(combinedReport.prescriptionPrice),
    prescription_number: Number(combinedReport.prescriptionNumber),
    diagnosis: combinedReport.diagnosis,
    total_costs: combinedReport.totalCosts,
    total_profit: combinedReport.totalProfits,
  }
  const prescriptionsAdjusted = combinedReport.prescriptions.map((report) => {
    return {
      medName: report.medName,
      prescribedQuantity: Number(report.prescribedQuantity),
    }
  })
  const reportAdjusted = {
    reportBasics,
    prescriptions: prescriptionsAdjusted,
  }

  return request.post(rootUrl + `/add/${patientId}`).send(reportAdjusted)
}
