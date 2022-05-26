import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      {/* Make sure the use of 'client' and 'patient' is consistent */}
      <Link to="/editStock">Edit Total Stock</Link>
      <Link to="/existingPatients">Existing Patient</Link>
      <Link to="/newPatient">New Patient</Link>
    </>
  )
}

export default Navbar
