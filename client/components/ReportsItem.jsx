import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Box, Divider } from "@mui/material"

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
      <Paper elevation={4} style={{ border: "0.25px solid lightgrey" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>{dateAdded}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              borderTop: "0.5px solid grey",
              padding: "0px",
            }}
          >
            <Box
              style={{
                paddingTop: "15px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              <Typography variant="h8" fontWeight={"bold"}>
                Diagnosis
              </Typography>
              <Box
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  p: 3,
                  borderRadius: "2px",
                }}
                style={{ marginTop: "10px" }}
              >
                <Typography variant="body2">{diagnosis}</Typography>
              </Box>
            </Box>
            <Box
              style={{
                paddingTop: "15px",
                marginTop: "25px",
                borderTop: "3px solid lightGrey",
                marginLeft: "25px",
                marginRight: "25px",
              }}
            >
              <Typography variant="h8" fontWeight={"bold"}>
                Prescriptions
              </Typography>
              <TableContainer
                style={{
                  paddingTop: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                <Table style={{ border: "1px solid lightgrey" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        bgcolor="lightgrey"
                        align="center"
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold" }}
                        bgcolor="lightgrey"
                        align="center"
                      >
                        Quantity
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ width: "10px" }}>
                    {prescription.map((medicine, i) => (
                      <TableRow
                        key={i}
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {medicine.medName}
                        </TableCell>

                        <TableCell align="center">
                          {medicine.prescribedQuantity}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Paper
              elevation={2}
              style={{
                marginTop: "25px",
                // borderTop: "3px solid lightGrey",
                marginLeft: "25px",
                marginRight: "25px",
                marginBottom: "25px",
                border: "1px solid lightgrey",
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h8" fontWeight={"bold"}>
                    More Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "white" }}>
                  {" "}
                  <TableContainer
                    style={{
                      paddingTop: "15px",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                  >
                    <Table
                      style={{
                        border: "1px solid lightgrey",
                        marginbottom: "20px",
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{ fontWeight: "bold" }}
                            bgcolor="lightgrey"
                            align="center"
                          >
                            Item
                          </TableCell>
                          <TableCell
                            sx={{ fontWeight: "bold" }}
                            bgcolor="lightgrey"
                            align="center"
                          >
                            Information
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ width: "10px" }}>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            Number of Prescriptions
                          </TableCell>
                          <TableCell align="center">
                            {prescriptionNumber}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            Price charged per prescription
                          </TableCell>
                          <TableCell align="center">
                            {prescriptionPrice}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            Total cost for all prescriptions
                          </TableCell>
                          <TableCell align="center">{totalCosts}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            Total profit from all prescriptions
                          </TableCell>
                          <TableCell align="center">{totalProfits}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  )
}

// ;<Box
//   sx={{ mb: 1, mt: 3 }}
//   style={{
//     borderTop: "0.5px solid grey",
//     paddingTop: "15px",
//     paddingLeft: "25px",
//     paddingRight: "25px",
//   }}
// >
//   <Typography variant="h8">
//     <b>Information</b>
//   </Typography>
//   <Box
//     sx={{
//       border: 1,
//       borderColor: "lightgrey",
//       p: 3,
//       borderRadius: "2px",
//     }}
//   >
//     <Typography>Prescription Number - {prescriptionNumber}</Typography>
//   </Box>
// </Box>
{
  /* <Typography>Prescription Price: {prescriptionPrice}</Typography>
<Typography>Total Costs: {totalCosts}</Typography>
<Typography>Total Profit: {totalProfits}</Typography> */
}
export default ReportsItem
