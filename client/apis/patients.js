import request from "superagent"
import { removeSpacesAll } from "../helper"

const rootUrl = "/api/v1/patients"

export function addPatient(patient, navigate) {
  const formattedPatient = {
    ...patient,
    fname: removeSpacesAll(patient.fname).toUpperCase(),
    lname: removeSpacesAll(patient.lname).toUpperCase(),
  }

  return request
    .post(rootUrl + "/add")
    .send(formattedPatient)
    .then((res) => res.json)
    .then(navigate("/patients"))
}

export function getPatients() {
  return request.get(rootUrl + "/").then((res) => res.body)
}

export function getPatientById(id) {
  return request.get(rootUrl + `/details/${id}`).then((res) => res.body)
}

export function profitPerPatient() {
  return request.get(rootUrl + `/profitPerPatient`).then((res) => res.body)
}
