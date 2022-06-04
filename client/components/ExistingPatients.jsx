import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPatients } from '../apis/patients'

function ExistingPatients() {
  const [patients, setpatients] = useState([])

  useEffect(async () => {
    try {
      const patientNames = await getPatients()
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
