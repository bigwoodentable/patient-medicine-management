import request from 'superagent'
import { removeSpacesAll, removeEmpty } from '../helper'

const rootUrl = '/api/v1/medicines'

export function getAllMedicines() {
  return request.get(rootUrl + '/all').then((res) => res.body)
}

export function updateAllMeds(values, navigate) {
  //remove empty entries
  console.log('API-values', values)
  const rmEmptyEntries = {
    meds: removeEmpty(values.meds),
  }
  console.log('API-rmEmptyEntries', rmEmptyEntries)
  //remove white spaces and set to 2 dp from med info names
  const formattedMeds = rmEmptyEntries.meds.map((med) => {
    return {
      code: removeSpacesAll(med.code).toUpperCase(),
      medName: removeSpacesAll(med.medName).toUpperCase(0),
      cost: Number(med.cost).toFixed(2),
    }
  })
  console.log('API-formattedmeds', formattedMeds)
  //check for duplicated entries
  const temp = {}
  const isDup = formattedMeds.every((med) => {
    if (temp[med.medName] === med.medName) {
      return false
    } else {
      temp[med.medName] = med.medName
    }
    return true
  })

  if (!isDup) {
    alert(`Please check if a medicine is repeated`)
    return null
  }

  return request
    .put(rootUrl + '/update')
    .send(formattedMeds)
    .then((res) => res.json)
    .then(navigate('/medicines'))
}
