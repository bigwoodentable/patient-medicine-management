import {
  Box,
  Button,
  createTheme,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material"
import { grey, indigo, orange } from "@mui/material/colors"
import React, { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import PatientDetails from "./PatientDetails.jsx"
import Reports from "../Patients/Reports.jsx"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { getPatientById, updatePatientById } from "../../apis/patients.js"
import EditIcon from "@mui/icons-material/Edit"
import EditPatientForm from "../forms/EditPatientForm.jsx"
import DeleteIcon from "@mui/icons-material/Delete"

function Patient() {
  const [loading, setLoading] = useState(false)
  const [patientDetails, setPatientDetails] = useState({})
  const [open, setOpen] = useState(false)
  const [updated, setUpdated] = useState(0)
  const navigate = useNavigate()
  const timer = useRef(0)

  const { id: patientId } = useParams()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    const deleteStatus = {
      status: "deleted",
    }
    const del = confirm("Are you sure you would like to delete this patient?")
    if (del) {
      updatePatientById(patientId, deleteStatus)
        .then(() => navigate("/Patients"))
        .catch((err) => console.error(err))
    }
    return null
  }

  useEffect(() => {
    setLoading(true)
    // timer.current = window.setTimeout(async () => {
    getPatientById(patientId)
      .then((details) => {
        setPatientDetails(details)
        setLoading(false)
        return null
      })
      .catch((err) => console.error(err))
    // }, 0)
  }, [updated])

  const themePatient = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1280,
        lg: 1500,
        xl: 1800,
      },
    },
    palette: {
      primary: {
        main: indigo[600],
        light: indigo[400],
        dark: indigo[900],
      },
      secondary: {
        main: orange[600],
        light: orange[400],
        dark: orange[900],
      },
      delete: {
        main: grey[600],
        dark: grey[900],
      },
      add: {
        main: grey[300],
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={themePatient}>
        <EditPatientForm
          open={open}
          handleClose={handleClose}
          patientId={patientId}
          setUpdated={setUpdated}
        />
        {!loading && (
          <Paper
            style={{
              height: "100%",
              margin: "25px",
              marginTop: "100px",
              background: " rgba(240,242,246,255)",
              minWidth: "100vh",
            }}
          >
            <Grid
              container
              style={{
                minHeight: "100vh",
                margin: "25px",
                paddingTop: "25px",
                minWidth: "100vh",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                style={{ maxWidth: "500px", marginBottom: "18px" }}
              >
                <Paper sx={{ width: "380px", p: 2 }} elevation={2}>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginBottom: "15px",
                    }}
                  >
                    <IconButton color="primary" onClick={handleClickOpen}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <PatientDetails
                    patientId={patientId}
                    patientDetails={patientDetails}
                  />
                </Paper>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/newReportForm/${patientId}`}
                >
                  <Button
                    sx={{
                      mt: 3,
                      bgcolor: "primary.light",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    <AddCircleIcon style={{ marginRight: "5px" }} />
                    <Typography style={{ marginTop: "3px" }}>
                      Create Report
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Paper
                  elevation={2}
                  style={{
                    padding: "18px",
                    paddingBottom: "27px",
                    maxWidth: "94%",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "18px",
                      paddingBottom: "8px",
                      borderBottom: "0.25px solid lightgrey",
                    }}
                  >
                    Reports
                  </Typography>
                  <Reports patientId={patientId} />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        )}
        {loading && (
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            style={{
              height: "100vh",
              paddingBottom: "100px",
            }}
          >
            {/* <LinearProgress color="secondary" style={{ width: "60%" }} /> */}
          </Grid>
        )}
      </ThemeProvider>
    </>
  )
}

export default Patient
