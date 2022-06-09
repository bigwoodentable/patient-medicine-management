import request from 'superagent'

const rootUrl = '/api/v1/reports'

export function getReportsById(patientId) {
  // return request.get(rootUrl + `/${patientId}`)
  return Promise.resolve([
    {
      dateAdded: 10222,
      diagnosis: 'cough with sore throat',
      prescriptions: [
        { id: 1, medName: 'medTwo', prescribedQuantity: 25 },
        { id: 2, medName: 'medThree', prescribedQuantity: 15 },
      ],
    },
    {
      dateAdded: 10122,
      diagnosis: 'stomach ache',
      prescriptions: [
        { id: 1, medName: 'medOne', prescribedQuantity: 16 },
        { id: 2, medName: 'medThree', prescribedQuantity: 36 },
      ],
    },
  ])
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
  // return request.post(rootUrl + `/add/${patientId}`).send(newreportAdjusted)
  console.log(reportAdjusted)
  return Promise.resolve(null)
}
