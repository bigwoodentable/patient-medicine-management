import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPatientNames } from '../apis/patient'

function ExistingPatients() {
  const [patients, setpatients] = useState([])

  useEffect(async () => {
    try {
      const patientNames = await getPatientNames()
      setpatients(patientNames)
    } catch (error) {
      console.error(error)
    }
  }, [])

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
