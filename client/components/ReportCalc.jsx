import { Box, Paper } from '@mui/material'
import React from 'react'

function ReportCalc() {
  return (
    <Paper elevation={3}>
      <Box
        sx={{
          height: '400px',
          width: '300px',
          border: '0.5px solid grey',
          borderRadius: '5px',
        }}
      ></Box>
    </Paper>
  )
}

export default ReportCalc
