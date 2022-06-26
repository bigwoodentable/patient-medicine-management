import { Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'

function ReportCalc(props) {
  const { profits, costs } = props

  return (
    <Paper elevation={3}>
      <Box
        sx={{
          height: '400px',
          width: '300px',
          border: '0.5px solid grey',
          borderRadius: '5px',
        }}
      >
        {costs === 0 ? null : (
          <>
            <Typography>Total Costs: {costs}</Typography>
            <Typography>Total Profit: {profits}</Typography>
          </>
        )}
      </Box>
    </Paper>
  )
}

export default ReportCalc
