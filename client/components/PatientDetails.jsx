import React, { useEffect, useState } from 'react'
import { getPatientDetailsFromId } from '../apis/patient.js'

function PatientDetails(props) {
  //This works at getting patientId
  const { patientId } = props

  const [patientDetail, setPatientDetail] = useState([])

  useEffect(async () => {
    try {
      const details = await getPatientDetailsFromId(patientId)
      setPatientDetail(details)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <h2>Patient Details</h2>
      <h3>Patient Name: {patientDetail.patientName}</h3>
      <h3>Description: {patientDetail.description}</h3>
      <h3>Age: {patientDetail.age}</h3>
    </>
  )
}

export default PatientDetails
