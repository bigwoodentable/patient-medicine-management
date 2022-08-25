const connection = require("./connection")
const { randomId } = require("./helper")
const { profitPerPatient } = require("./reports")

function getPatients(db = connection) {
  return db("patients")
    .where("status", "active")
    .select("patient_id as patientId", "fname", "lname")
}

function insertPatient(patient, db = connection) {
  return db("patients").insert({
    patient_id: randomId(),
    ...patient,
    status: "active",
    date_added: new Date(Date.now()),
  })
}

function getPatientById(id, db = connection) {
  return db("patients")
    .where("patient_id", id)
    .select(
      "patient_id as patientId",
      "fname",
      "lname",
      "age",
      "notes",
      "date_added as dateAdded"
    )
    .first()
}

async function profitPerPatientTotal(db = connection) {
  const AllId = await getAllId()
  const allPatientsProfits = []
  for (const id of AllId) {
    const profit = await profitPerPatient(id.patientId)
    const name = await getNameById(id.patientId)
    allPatientsProfits.push({ ...name[0], ...profit[0] })
  }
  return allPatientsProfits
}

function getAllId(db = connection) {
  return db("patients").select("patient_id as patientId")
}

async function getNameById(id, db = connection) {
  const name = await db("patients")
    .where("patient_id", id)
    .select("fname", "lname")
  return Promise.resolve([{ name: `${name[0].fname} ${name[0].lname}` }])
}

getNameById(2).then((res) => console.log(res))

module.exports = {
  getPatients,
  insertPatient,
  getPatientById,
  profitPerPatientTotal,
}
