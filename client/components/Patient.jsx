import {
  Box,
  Button,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material"
import { grey, indigo, orange } from "@mui/material/colors"
import { flexbox } from "@mui/system"
import React from "react"
import { useParams, Link } from "react-router-dom"
import PatientDetails from "./PatientDetails.jsx"
import Reports from "./Reports.jsx"
import WaitIndicator from "./WaitIndicator.jsx"
import AddCircleIcon from "@mui/icons-material/AddCircle"

function Patient() {
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
  //useParams works
  const { id: patientId } = useParams()
  return (
    <>
      <ThemeProvider theme={themePatient}>
        <Paper
          style={{
            minHeight: "100vh",
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
              <Paper sx={{ width: "380px", p: 3 }} elevation={2}>
                <PatientDetails patientId={patientId} />
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
            <WaitIndicator />
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default Patient
