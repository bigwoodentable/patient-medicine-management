import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EditStockForm from './EditStockForm.jsx'
import ExistingPatients from './ExistingPatients.jsx'
import Home from './Home.jsx'
import NewPatientForm from './NewPatientForm.jsx'
import NewReportForm from './NewReportForm.jsx'
import Patient from './Patient.jsx'
import Navbar from './Navbar.jsx'
import Stock from './Stock.jsx'
import { styled } from '@mui/system'

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingLeft: theme.spacing(32),
  paddingTop: 90,
  paddingBottom: theme.spacing(10),
}))

function App() {
  return (
    <div>
      <Navbar />
      <MainStyle>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/newPatient" element={<NewPatientForm />} />
          <Route path="/Patients" element={<ExistingPatients />} />
          <Route path="/patient/:id" element={<Patient />} />
          <Route path="/newReportForm/:id" element={<NewReportForm />} />
          <Route path="/editStock" element={<EditStockForm />} />
          <Route path="/Stocks" element={<Stock />} />
        </Routes>
      </MainStyle>
    </div>
  )
}

export default App
