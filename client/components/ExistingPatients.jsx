import React from 'react'
import { Link } from 'react-router-dom'

function ExistingPatients() {
  const patients = [
    { id: 1, patientName: 'john' },
    { id: 2, patientName: 'mary' },
    { id: 3, patientName: 'james' },
  ]
  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>
          <Link to={`/patient/${patient.id}`}>{patient.patientName}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ExistingPatients
