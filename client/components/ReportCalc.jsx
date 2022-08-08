import { Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'

function ReportCalc(props) {
  const { profits, costs } = props

  return costs === 0 ? null : (
    <>
      <Typography>Total Costs: {costs}</Typography>
      <Typography>Total Profit: {profits}</Typography>
    </>
  )
}

export default ReportCalc
