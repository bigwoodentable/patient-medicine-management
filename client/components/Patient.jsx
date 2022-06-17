import { Box, Button, Paper } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PatientDetails from './PatientDetails.jsx'
import Reports from './Reports.jsx'

function Patient() {
  //useParams works
  const { id: patientId } = useParams()
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          columnGap: 4,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Box sx={{ p: 1 }}>
          <Paper sx={{ width: '400px', p: 3 }} elevation={3}>
            <PatientDetails patientId={patientId} />
          </Paper>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/newReport/${patientId}`}
          >
            <Button sx={{ mt: 3 }} variant="contained" color="primary">
              Create Report
            </Button>
          </Link>
        </Box>
        <Box>
          <Reports patientId={patientId} />
        </Box>
      </Box>
    </>
  )
}

export default Patient
