import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div>Edit</div>
      {/* Make sure the use of 'client' and 'patient' is consistent */}
      <Link to="/existingPatients">Existing Patient</Link>
      <Link to="/newPatient">New Patient</Link>
    </>
  )
}

export default Navbar
