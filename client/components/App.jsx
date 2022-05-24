import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ExistingPatients from './ExistingPatients.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import NewPatient from './NewPatient.jsx'
import Patient from './Patient.jsx'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatient />} />
        <Route path="/existingPatients" element={<ExistingPatients />} />
        <Route path="/patient/:id" element={<Patient />} />
      </Routes>
    </div>
  )
}

export default App
