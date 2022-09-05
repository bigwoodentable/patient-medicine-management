import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearWaiting, setWaiting } from '../actions/waiting.js'
import { getPatientById } from '../apis/patients.js'

function PatientDetails(props) {
  //This works at getting patientId
  const { patientId } = props
  const [patientDetails, setPatientDetails] = useState({})
  const dispatch = useDispatch()

  useEffect(async () => {
    try {
      dispatch(setWaiting())
      const details = await getPatientById(patientId)
      setPatientDetails(details)
      dispatch(clearWaiting())
    } catch (error) {
      console.error(error)
    }
  }, [])

  return patientDetails.fname ? (
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
  ) : null
}

export default PatientDetails
