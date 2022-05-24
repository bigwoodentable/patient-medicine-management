import React from 'react'
import { useParams } from 'react-router-dom'
import PatientDetails from './PatientDetails.jsx'
import Prescriptions from './Prescriptions.jsx'

function Patient() {
  //useParams works
  const { id: patientId } = useParams()
  return (
    <>
      <PatientDetails patientId={patientId} />
      <Prescriptions patientId={patientId} />
    </>
  )
}

export default Patient
