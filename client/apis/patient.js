import request from 'superagent'

const rootUrl = '/api/v1/patient'

export function addPatient(newClient) {
  const { patientName, age, description } = newClient
  const newClientAdjusted = {
    patientName,
    age: Number(age),
    description,
  }
  // return request.post(rootUrl + '/add').send(newClient)
  console.log(newClientAdjusted)
  return Promise.resolve(null)
}

export function getPatientNames() {
  // return request.get(rootUrl + '/names')
  return Promise.resolve([
    { id: 1, patientName: 'john' },
    { id: 2, patientName: 'mary' },
    { id: 3, patientName: 'james' },
  ])
}

export function getPatientDetailsFromId(id) {
  // return request.get(rootUrl + `/details/${id}`)
  return Promise.resolve({
    patientName: 'mike',
    description: 'male, architect',
    age: 50,
  })
}
