import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PatientDetails from './PatientDetails.jsx'
import Prescriptions from './Prescriptions.jsx'

function Patient() {
  //useParams works
  const { id: patientId } = useParams()
  return (
    <>
      <div>
        <PatientDetails patientId={patientId} />
        <Link to={`/newPrescription/${patientId}`}>
          LINK: Create New Prescription
        </Link>
      </div>
      <Prescriptions patientId={patientId} />
    </>
  )
}

export default Patient
