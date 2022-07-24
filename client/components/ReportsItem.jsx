import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Divider } from '@mui/material'

function ReportsItem(props) {
  const {
    dateAdded,
    diagnosis,
    prescription,
    prescriptionPrice,
    prescriptionNumber,
    totalCosts,
    totalProfits,
  } = props.report

  return (
    <>
      <Accordion sx={{ width: 450 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{dateAdded}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Paper sx={{ p: 3, mb: 3 }} elevation={2}> */}
          <Typography variant="h8" fontWeight={'bold'}>
            Diagnosis <br />
            <br />
          </Typography>
          <Box
            sx={{
              border: 1,
              borderColor: '#GGGGGG',
              p: 3,
              borderRadius: '2px',
            }}
          >
            <Typography variant="body2">{diagnosis}</Typography>
          </Box>
          {/* </Paper> */}
          <Typography variant="body1" sx={{ mb: 1, mt: 3 }}>
            <b>Number of Prescriptions:</b> {prescriptionNumber}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: 'bold' }}
                    bgcolor="lightgrey"
                    align="right"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 'bold' }}
                    bgcolor="lightgrey"
                    align="right"
                  >
                    Quantity
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ width: '10px' }}>
                {prescription.map((medicine, i) => (
                  <TableRow
                    key={i}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="right">
                      {medicine.medName}
                    </TableCell>

                    <TableCell align="right">
                      {medicine.prescribedQuantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Accordion sx={{ mt: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="b2" fontWeight="bold">
                Financial Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: 'white' }}>
              <Typography>Prescription Price: {prescriptionPrice}</Typography>
              <Typography>Total Costs: {totalCosts}</Typography>
              <Typography>Total Profit: {totalProfits}</Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ReportsItem
