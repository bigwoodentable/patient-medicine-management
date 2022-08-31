const connection = require("./connection")
const { randomId } = require("./helper")
const {
  profitPerPatient,
  totalVisits,
  revenuePerPatient,
} = require("./reports")

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

function updatePatientById(id, data, db = connection) {
  return db("patients").where("patient_id", id).update(data)
}
revenuePerPatientTotal().then((res) => console.log(res))
async function revenuePerPatientTotal(db = connection) {
  const AllId = await getAllId()
  const allPatientsProfits = []
  for (const id of AllId) {
    const revenue = await revenuePerPatient(id.patientId)
    const name = await getNameById(id.patientId)
    allPatientsProfits.push({ ...name[0], ...revenue[0] })
  }
  const noNullProfits = allPatientsProfits.filter(
    (patient) => patient.totalRevenue
  )
  //Top 5 profits
  const topFive = noNullProfits
    .sort((a, b) => b.totalRevenue - a.totalRevenue)
    .slice(0, 5)

  return topFive
}

async function visitsPatientTotal(db = connection) {
  const AllId = await getAllId()
  const allPatientsVisits = []
  for (const id of AllId) {
    const visits = await totalVisits(id.patientId)
    const name = await getNameById(id.patientId)
    allPatientsVisits.push({ ...name[0], ...visits[0] })
  }
  //Top 5 visits
  const topFive = allPatientsVisits
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 5)
  return topFive
}

function getAllId(db = connection) {
  return db("patients")
    .where("status", "active")
    .select("patient_id as patientId")
}

async function getNameById(id, db = connection) {
  const name = await db("patients")
    .where("patient_id", id)
    .select("fname", "lname")
  return Promise.resolve([{ name: `${name[0].fname} ${name[0].lname}` }])
}

module.exports = {
  getPatients,
  insertPatient,
  getPatientById,
  revenuePerPatientTotal,
  visitsPatientTotal,
  updatePatientById,
}
