import React from "react"
import { Routes, Route } from "react-router-dom"
import EditStockForm from "./forms/EditStockForm.jsx"
import ExistingPatients from "./ExistingPatients.jsx"
import Home from "./Home/Home.jsx"
import NewPatientForm from "./forms/NewPatientForm.jsx"
import Patient from "./Patient.jsx"
import Stock from "./Stock.jsx"
import { styled } from "@mui/system"
import NewReportForm from "./forms/NewReportForm.jsx"
import Test from "./Test.jsx"
import Navbar from "./Navbar.jsx"
import { ThemeProvider } from "@mui/system"
import { Box, createMuiTheme, createTheme, CssBaseline } from "@mui/material"
import { blue, grey, indigo, lightBlue, orange } from "@mui/material/colors"
import { cyan } from "@material-ui/core/colors"
import "../styles.css"

function App() {
  const theme = createTheme({
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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box className="app">
          <Navbar />
          <Box style={{ marginTop: "70px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newPatient" element={<NewPatientForm />} />
              <Route path="/patients" element={<ExistingPatients />} />
              <Route path="/patient/:id" element={<Patient />} />
              <Route path="/newReportForm/:id" element={<NewReportForm />} />
              <Route path="/editStock" element={<EditStockForm />} />
              <Route path="/Stocks" element={<Stock />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Box>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
