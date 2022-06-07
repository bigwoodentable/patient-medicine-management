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

export function addReportById(newPrescriptions, patientId) {
  const newPrescriptionAdjusted = newPrescriptions.map((prescription) => {
    return {
      medName: prescription.medName,
      prescribedQuantity: Number(prescription.prescribedQuantity),
    }
  })
  // return request.post(rootUrl + `/add/${patientId}`).send(newPrescriptionAdjusted)
  console.log(newPrescriptionAdjusted)
  return Promise.resolve(null)
}
