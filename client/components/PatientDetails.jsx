import { Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { getPatientById } from "../apis/patients.js"

function PatientDetails({ patientId, patientDetails }) {
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
