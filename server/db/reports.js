const connection = require('./connection')

function getReportsById(patientId, db = connection) {
  return db('reports')
    .where('patient_id', patientId)
    .select('report_id as reportId', 'date_added as dateAdded', 'diagnosis')
}

function getPrescriptionsByReportId(reportId, db = connection) {
  return db('prescriptions')
    .where('report_id', reportId)
    .select('med_name as medName', 'prescribed_quantity as prescribedQuantity')
}

//input diagnosis + patient_id, add inputs + date
function addReportById(diagnosis, patientId, db = connection) {
  const newReport = {
    date_added: new Date(Date.now()).toLocaleDateString(),
    diagnosis,
    patient_id: patientId,
  }

  return db('reports').insert(newReport)
}

//input prescriptions + reportId, add inputs + date
async function addPrescriptionsById(prescriptions, reportId, db = connection) {
  prescriptions.forEach(async (prescription) => {
    return await db('prescriptions').insert({
      prescribed_quantity: prescription.prescribedQuantity,
      med_name: prescription.medName,
      report_id: reportId,
    })
  })

  return null
}

module.exports = {
  getReportsById,
  getPrescriptionsByReportId,
  addReportById,
  addPrescriptionsById,
}
