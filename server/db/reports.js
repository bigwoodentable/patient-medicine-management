const connection = require("./connection")
const { randomId } = require("./helper")

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
    report_id: randomId(),
    date_added: new Date(Date.now()).toLocaleDateString(),
    ...reportBasics,
    patient_id: patientId,
  }

  //postgres syntax
  // return db("reports").insert(newReport, ["report_id"])
  //sqlite syntax

  return db("reports").insert(newReport)
}

function deleteReportById(reportId, db = connection) {
  return db("reports").where("report_id", reportId).del()
}

//input prescriptions + reportId, add inputs + date
function addPrescriptionsById(prescriptions, reportId, db = connection) {
  console.log("addPrescriptionsById - prescriptions", prescriptions)
  console.log("addPrescriptionsById - reportId", reportId)
  prescriptions.forEach(async (prescription) => {
    console.log("addPrescriptionsById - inloop prescription", prescription)
    return await db("prescriptions").insert({
      prescribed_quantity: prescription.prescribedQuantity,
      med_name: prescription.medName,
      //postgres - potentially need to uncomment this
      // report_id: reportId,
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
async function revenuePerPatient(patientId) {
  const profits = await profitPerPatient(patientId)
  const costs = await costsPerPatient(patientId)

  return [
    {
      totalRevenue:
        Number(profits[0].totalProfit) + Number(costs[0].totalCosts),
    },
  ]
}

function profitPerPatient(patientId, db = connection) {
  return db("reports")
    .where("patient_id", patientId)
    .sum("total_profit as totalProfit")
}

function costsPerPatient(patientId, db = connection) {
  return db("reports")
    .where("patient_id", patientId)
    .sum("total_costs as totalCosts")
}

//input patientId to get total number of reports (numb of visits)
function totalVisits(patientId, db = connection) {
  return db("reports")
    .where("patient_id", patientId)
    .count("report_id as visits")
}

module.exports = {
  getReportsById,
  getPrescriptionsByReportId,
  addReportById,
  addPrescriptionsById,
  revenuePerPatient,
  totalVisits,
  deleteReportById,
}
