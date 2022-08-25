const connection = require("./connection")

function getReportsById(patientId, db = connection) {
  return db("reports")
    .where("patient_id", patientId)
    .select(
      "report_id as reportId",
      "date_added as dateAdded",
      "diagnosis",
      "prescription_price as prescriptionPrice",
      "prescription_number as prescriptionNumber",
      "total_costs as totalCosts",
      "total_profit as totalProfits"
    )
}

function getPrescriptionsByReportId(reportId, db = connection) {
  return db("prescriptions")
    .where("report_id", reportId)
    .select("med_name as medName", "prescribed_quantity as prescribedQuantity")
}

//input diagnosis + patient_id, add inputs + date
function addReportById(reportBasics, patientId, db = connection) {
  const newReport = {
    date_added: new Date(Date.now()).toLocaleDateString(),
    ...reportBasics,
    patient_id: patientId,
  }

  return db("reports").insert(newReport)
}

//input prescriptions + reportId, add inputs + date
function addPrescriptionsById(prescriptions, reportId, db = connection) {
  prescriptions.forEach(async (prescription) => {
    return await db("prescriptions").insert({
      prescribed_quantity: prescription.prescribedQuantity,
      med_name: prescription.medName,
      report_id: reportId,
    })
  })

  return null
}

//input prescriptions + reportId, add inputs + date
function addPrescriptionsById(prescriptions, reportId, db = connection) {
  prescriptions.forEach(async (prescription) => {
    return await db("prescriptions").insert({
      prescribed_quantity: prescription.prescribedQuantity,
      med_name: prescription.medName,
      report_id: reportId,
    })
  })

  return null
}

//input patientId to get total profit
function profitPerPatient(patientId, db = connection) {
  return db("reports")
    .where("patient_id", patientId)
    .sum("total_profit as totalProfit")
}

module.exports = {
  getReportsById,
  getPrescriptionsByReportId,
  addReportById,
  addPrescriptionsById,
  profitPerPatient,
}
