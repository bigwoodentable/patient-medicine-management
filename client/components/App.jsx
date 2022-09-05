import React from "react"
import { Routes, Route } from "react-router-dom"
import EditStockForm from "./forms/EditStockForm.jsx"
import ExistingPatients from "./Patients/ExistingPatients.jsx"
import Home from "./Dashboard/Home.jsx"
import NewPatientForm from "./forms/NewPatientForm.jsx"
import Patient from "./Patients/Patient.jsx"
import Stock from "./Stock/Stock.jsx"

import NewReportForm from "./forms/NewReportForm.jsx"
import Test from "./Test.jsx"
import Navbar from "./Navbar.jsx"
import { ThemeProvider } from "@mui/system"
import { Box, createTheme, CssBaseline } from "@mui/material"
import { grey, indigo, orange } from "@mui/material/colors"

import "../styles.css"
import Footer from "./Footer.jsx"

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
          <Box style={{ marginTop: "70px", paddingBottom: "56px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newPatient" element={<NewPatientForm />} />
              <Route path="/patients" element={<ExistingPatients />} />
              <Route path="/patient/:id" element={<Patient />} />
              <Route path="/newReportForm/:id" element={<NewReportForm />} />
              <Route path="/editStock" element={<EditStockForm />} />
              <Route path="/Stocks" element={<Stock />} />
              {/* <Route path="/test" element={<Test />} /> */}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
