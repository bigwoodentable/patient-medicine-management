import { Box, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import NewReportForm from './forms/NewReportForm.jsx'
import ReportCalc from './ReportCalc.jsx'

function NewReport() {
  const { id: patientId } = useParams()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <NewReportForm patientId={patientId} />

      <ReportCalc />
    </Box>
  )
}

export default NewReport
