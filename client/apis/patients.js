import request from "superagent"
import { removeSpacesAll } from "../helper"

const rootUrl = "/api/v1/patients"

export function addPatient(patient, handleClose) {
  const formattedPatient = {
    ...patient,
    fname: removeSpacesAll(patient.fname).toUpperCase(),
    lname: removeSpacesAll(patient.lname).toUpperCase(),
  }

  return request
    .post(rootUrl + "/add")
    .send(formattedPatient)
    .then((res) => res.json)
    .then(handleClose())
}

export function getPatients() {
  return request.get(rootUrl + "/").then((res) => res.body)
}

export function getPatientById(id) {
  return request.get(rootUrl + `/details/${id}`).then((res) => res.body)
}

export function updatePatientById(id, updatedInfo) {
  let formattedInfo = {}
  if (!updatedInfo.status) {
    formattedInfo = {
      fname: updatedInfo.fname.toUpperCase(),
      lname: updatedInfo.lname.toUpperCase(),
      age: updatedInfo.age,
      notes: updatedInfo.notes,
    }
  } else {
    formattedInfo = updatedInfo
  }

  return request
    .put(rootUrl + `/update/${id}`)
    .send(formattedInfo)
    .then((res) => res.body)
}

export function revenuePerPatient() {
  return request.get(rootUrl + `/revenuePerPatient`).then((res) => res.body)
}

export function visitsPerPatient() {
  return request.get(rootUrl + `/totalVisits`).then((res) => res.body)
}
