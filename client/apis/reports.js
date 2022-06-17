import request from 'superagent'

const rootUrl = '/api/v1/reports'

export function getReportsById(patientId) {
  return request.get(rootUrl + `/${patientId}`).then((res) => res.body)
}

export function addReportById(newReports, patientId) {
  const reportBasics = {
    prescription_price: Number(newReports.prescriptionPrice),
    prescription_number: Number(newReports.prescriptionNumber),
    diagnosis: newReports.diagnosis,
  }
  const prescriptionsAdjusted = newReports.prescriptions.map((report) => {
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
