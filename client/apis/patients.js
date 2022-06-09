import request from 'superagent'

const rootUrl = '/api/v1/patients'

export function addPatient(newClient) {
  const { fname, lname, age, notes } = newClient
  const newClientAdjusted = {
    fname,
    lname,
    age: Number(age),
    notes,
  }
  // return request.post(rootUrl + '/add').send(newClient)
  console.log(newClientAdjusted)
  return Promise.resolve(null)
}

export function getPatients() {
  // return request.get(rootUrl + '/')
  return Promise.resolve([
    {
      patientId: '1',
      fname: 'mike',
      lname: 'lee',
    },
    {
      patientId: '3',
      fname: 'james',
      lname: 'wong',
    },
    {
      patientId: '83690be5-8787-4512-b161-47cfbb227b57',
      fname: 'Test',
      lname: 'Test',
    },
  ])
}

export function getPatientById(id) {
  console.log('api')
  // return request.get(rootUrl + `/details/${id}`)
  return Promise.resolve({
    patientId: '2',
    fname: 'john',
    lname: 'chan',
    age: 31,
    notes: 'male, doctor',
    dateAdded: 222222,
  })
}
