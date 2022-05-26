import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function NewPrescriptionForm() {
  //May need to send this back to backend
  const { id: patientId } = useParams()

  const [newPrescription, setnewPrescription] = useState({
    medName: '',
    prescribedQuantity: 0,
  })

  const onChange = (e) => {
    console.log('e.target.name', e.target.name)
    setnewPrescription({
      ...newPrescription,
      //Remove the computed property
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //send back through API function
    console.log('newPrescription: ', newPrescription)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="medName"
        placeholder="Medicine Name"
        value={newPrescription.medName}
        onChange={onChange}
      />
      <input
        //needs to be an number
        type="text"
        name="prescribedQuantity"
        placeholder="Prescribed Quantity"
        value={newPrescription.prescribedQuantity}
        onChange={onChange}
      />
      <input type="submit" />
    </form>
  )
}

export default NewPrescriptionForm
