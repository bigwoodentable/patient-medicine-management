import React, { useState } from 'react'
import { addPatient } from '../apis/patients'

//REFACTOR WITH FORMIK
function NewPatientForm() {
  const [newClient, setNewClient] = useState({
    patientName: '',
    age: 0,
    description: '',
  })

  const onChange = (e) => {
    setNewClient({
      ...newClient,
      //Remove the computed property
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    //send back through API function
    try {
      await addPatient(newClient)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="patientName"
        placeholder="patient name"
        value={newClient.patientName}
        onChange={onChange}
      />
      <input
        //needs to be an number
        type="text"
        name="age"
        placeholder="age"
        value={newClient.age}
        onChange={onChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={newClient.description}
        onChange={onChange}
      />
      <input type="submit" />
    </form>
  )
}

export default NewPatientForm
