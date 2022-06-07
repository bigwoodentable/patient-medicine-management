const connection = require('./connection')

function getReportsById(patientId, db = connection) {
  return db('reports')
    .where('patient_id', patientId)
    .select('report_id as reportId', 'date_added as dateAdded', 'diagnosis')
}

function getPrescriptionsByReportId(reportId, db = connection) {
  console.log('getPrescriptionsByReportId db function running')
  return db('prescriptions')
    .where('report_id', reportId)
    .select('med_name as medName', 'prescribed_quantity as prescribedQuantity')
}

module.exports = {
  getReportsById,
  getPrescriptionsByReportId,
}
