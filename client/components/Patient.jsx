import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PatientDetails from './PatientDetails.jsx'
import Reports from './Reports.jsx'

function Patient() {
  //useParams works
  const { id: patientId } = useParams()
  return (
    <>
      <div>
        <PatientDetails patientId={patientId} />
        <Link to={`/newReportForm/${patientId}`}>LINK: Create New Report</Link>
      </div>
      <Reports patientId={patientId} />
    </>
  )
}

export default Patient
