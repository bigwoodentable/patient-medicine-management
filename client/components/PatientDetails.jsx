import { Typography } from '@mui/material'
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
      <Typography variant="h4" component="div">
        {`${patientDetails.fname} ${patientDetails.lname}`}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Age: {patientDetails.age}
      </Typography>
      <Typography variant="body2">
        {patientDetails.notes} <br />
      </Typography>
    </>
  )
}

export default PatientDetails
