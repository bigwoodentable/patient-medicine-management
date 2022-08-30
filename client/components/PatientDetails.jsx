import { Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { clearWaiting, setWaiting } from "../actions/waiting.js"
import { getPatientById } from "../apis/patients.js"

function PatientDetails({ patientId, patientDetails }) {
  //This works at getting patientId
  // const { patientId } = props
  // const [patientDetails, setPatientDetails] = useState({})

  // useEffect(async () => {
  //   try {
  //     console.log("PatientDetials")
  //     props.setLoading(true)
  //     props.timer.current = window.setTimeout(async () => {
  //       const details = await getPatientById(patientId)
  //       props.setLoading(false)
  //       setPatientDetails(details)
  //     }, 450)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])

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
