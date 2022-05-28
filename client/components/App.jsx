import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EditStockForm from './EditStockForm.jsx'
import ExistingPatients from './ExistingPatients.jsx'
import Home from './Home.jsx'
import NewPatientForm from './NewPatientForm.jsx'
import NewPrescriptionForm from './NewPrescriptionForm.jsx'
import Patient from './Patient.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatientForm />} />
        <Route path="/existingPatients" element={<ExistingPatients />} />
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/newPrescription/:id" element={<NewPrescriptionForm />} />
        <Route path="/editStock" element={<EditStockForm />} />
      </Routes>
    </div>
  )
}

export default App
