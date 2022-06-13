import request from 'superagent'

const rootUrl = '/api/v1/reports'

export function getReportsById(patientId) {
  return request.get(rootUrl + `/${patientId}`).then((res) => res.body)
}

export function addReportById(newReports, patientId) {
  const prescriptionsAdjusted = newReports.prescriptions.map((report) => {
    return {
      medName: report.medName,
      prescribedQuantity: Number(report.prescribedQuantity),
    }
  })
  const reportAdjusted = {
    diagnosis: newReports.diagnosis,
    prescriptions: prescriptionsAdjusted,
  }
  return request.post(rootUrl + `/add/${patientId}`).send(reportAdjusted)
}
