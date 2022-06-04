const connection = require('./connection')
const { randomId } = require('./helper')

function getPatients(db = connection) {
  return db('patients')
    .where('status', 'active')
    .select('patient_id as patientId', 'fname', 'lname')
}

function insertPatient(patient, db = connection) {
  return db('patients').insert({
    patient_id: randomId(),
    ...patient,
    status: 'active',
    date_added: new Date(Date.now()),
  })
}

function getPatientById(id, db = connection) {
  return db('patients')
    .where('patient_id', id)
    .select(
      'patient_id as patientId',
      'fname',
      'lname',
      'age',
      'notes',
      'date_added as dateAdded'
    )
}

module.exports = {
  getPatients,
  insertPatient,
  getPatientById,
}
