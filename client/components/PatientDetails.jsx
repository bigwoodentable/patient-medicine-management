import React from 'react'

function PatientDetails(props) {
  //This works at getting patientId
  const { patientId } = props

  const patientDetail = {
    patientName: 'mike',
    description: 'male, architect',
    age: 50,
  }

  return (
    <>
      <h2>Patient Details</h2>
      <h3>Patient Name: {patientDetail.patientName}</h3>
      <h3>Description: {patientDetail.description}</h3>
      <h3>Age: {patientDetail.age}</h3>
    </>
  )
}

export default PatientDetails
