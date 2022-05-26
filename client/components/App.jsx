import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EditStock from './EditStock.jsx'
import ExistingPatients from './ExistingPatients.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import NewPatientForm from './NewPatientForm.jsx'
import NewPrescriptionForm from './NewPrescriptionForm.jsx'
import Patient from './Patient.jsx'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatientForm />} />
        <Route path="/existingPatients" element={<ExistingPatients />} />
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/newPrescription/:id" element={<NewPrescriptionForm />} />
        <Route path="/editStock" element={<EditStock />} />
      </Routes>
    </div>
  )
}

export default App
