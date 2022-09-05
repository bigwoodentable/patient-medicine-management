import request from "superagent"
import { calcFinances, removeEmpty, removeSpacesAll } from "../helper"

const rootUrl = "/api/v1/reports"

export function getReportsById(patientId) {
  return request.get(rootUrl + `/${patientId}`).then((res) => res.body)
}

export function deleteReportByReportId(reportId) {
  return request.delete(rootUrl + `/delete/${reportId}`).then(() => null)
}

export function addReportById(
  newReport,
  totalCosts,
  totalProfits,
  medInfo,
  patientId,
  navigate
) {
  const { prescriptions, prescriptionNumber, prescriptionPrice } = newReport
  let formattedReport = {}
  // console.log("api - prescriptions", prescriptions)
  //check if medicines prescribed
  if (prescriptions[0].medName === "") {
    if (confirm("Would you like to continue with no prescriptions?")) {
      //if intended to have no prescriptions, clear prescriptions array
      formattedReport = { ...newReport, prescriptions: [] }
    } else {
      return null
    }
  } else {
    //Remove empty prescriptions
    const rmEmptyPrescrips = {
      ...newReport,
      prescriptions: removeEmpty(prescriptions),
    }
    // console.log("api - rmEmptyPrescrips", rmEmptyPrescrips)
    //Remove white spaces from the medicine names
    const rmSpacePrescriptions = rmEmptyPrescrips.prescriptions.map((med) => {
      return { ...med, medName: removeSpacesAll(med.medName) }
    })

    //Check if entered medicines' names match the names in current stocks
    const correctPrescription = rmSpacePrescriptions.every((prescription) => {
      return medInfo.find((info) => info.medName === prescription.medName)
    })

    if (!correctPrescription) {
      alert(
        "Please make sure medicines' names are spelt correctly and are in current stocks"
      )
      return null
    }

    //Check for duplicates - attempting to use a solution that's O(n) instead of O(n2)
    const temp = {}
    const isDup = rmSpacePrescriptions.every((med) => {
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

    //update report with medicine names that do not have white spaces
    formattedReport = {
      ...newReport,
      prescriptions: rmSpacePrescriptions,
    }
  }
  // console.log("api - formattedReport", formattedReport)
  //calculate total profits and total costs
  let finances = {}
  if (totalCosts === 0) {
    finances = calcFinances(
      medInfo,
      prescriptions,
      prescriptionNumber,
      prescriptionPrice
    )
  } else {
    finances = { totalCosts, totalProfits }
  }

  const combinedReport = { ...formattedReport, ...finances }

  const reportBasics = {
    prescription_price: Number(combinedReport.prescriptionPrice),
    prescription_number: Number(combinedReport.prescriptionNumber),
    diagnosis: combinedReport.diagnosis,
    total_costs: combinedReport.totalCosts,
    total_profit: combinedReport.totalProfits,
  }

  const prescriptionsFormatted = combinedReport.prescriptions.map((report) => {
    return {
      medName: report.medName,
      prescribedQuantity: Number(report.prescribedQuantity),
    }
  })

  const ReportFormattedCombined = {
    reportBasics,
    prescriptions: prescriptionsFormatted,
  }
  // console.log("api - ReportFormattedCombined", ReportFormattedCombined)
  return request
    .post(rootUrl + `/add/${patientId}`)
    .send(ReportFormattedCombined)
    .then(navigate(`/patient/${patientId}`))
}
