import React, { useEffect, useState } from 'react'
import { getPatientById } from '../apis/patients.js'

function PatientDetails(props) {
  //This works at getting patientId
  const { patientId } = props

  const [patientDetails, setPatientDetails] = useState({})

  useEffect(async () => {
    try {
      const details = await getPatientById(patientId)
      setPatientDetails(details)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <h2>Patient Details</h2>
      <h3>Patient Name: {`${patientDetails.fname} ${patientDetails.lname}`}</h3>
      <h3>Notes: {patientDetails.notes}</h3>
      <h3>Age: {patientDetails.age}</h3>
    </>
  )
}

export default PatientDetails
