import request from 'superagent'

const rootUrl = '/api/v1/prescriptions'

export function getPrescriptionsById(id) {
  // return request.get(rootUrl + `/${id}`)
  return Promise.resolve([
    {
      date: 10222,
      diagnosis: 'cough with sore throat',
      medicines: [
        { id: 1, medName: 'medTwo', prescribedQuantity: 25 },
        { id: 2, medName: 'medThree', prescribedQuantity: 15 },
      ],
    },
    {
      date: 10122,
      diagnosis: 'stomach ache',
      medicines: [
        { id: 1, medName: 'medOne', prescribedQuantity: 16 },
        { id: 2, medName: 'medThree', prescribedQuantity: 36 },
      ],
    },
  ])
}

export function addPrescriptionById(newPrescription, id) {
  const { medName, prescribedQuantity } = newPrescription
  const newPrescriptionAdjusted = {
    medName,
    prescribedQuantity: Number(prescribedQuantity),
  }
  // return request.post(rootUrl + `/add/${id}`).send(newPrescriptionAdjusted)
  console.log(newPrescriptionAdjusted)
  return Promise.resolve(null)
}
