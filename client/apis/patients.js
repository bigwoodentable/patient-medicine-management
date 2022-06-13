import request from 'superagent'

const rootUrl = '/api/v1/patients'

export function addPatient(newClient) {
  return request.post(rootUrl + '/add').send(newClient)
}

export function getPatients() {
  return request.get(rootUrl + '/').then((res) => res.body)
}

export function getPatientById(id) {
  return request.get(rootUrl + `/details/${id}`).then((res) => res.body)
}
