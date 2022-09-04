import { Typography } from "@mui/material"
import React from "react"

function PatientDetails({ patientDetails }) {
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
