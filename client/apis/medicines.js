import request from 'superagent'

const rootUrl = '/api/v1/medicines'

export function getAllMedicines() {
  return request.get(rootUrl + '/all').then((res) => res.body)
}

export function updateAllMeds(meds, navigate) {
  return request
    .put(rootUrl + '/update')
    .send(meds)
    .then((res) => res.json)
    .then(navigate('/medicines'))
}
