import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPatient } from '../apis/patients'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Box } from '@mui/material'

function NewPatientForm() {
  const navigate = useNavigate()

  const [newClient, setNewClient] = useState({
    fname: '',
    lname: '',
    age: 0,
    notes: '',
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
      await addPatient(newClient, navigate)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
        width: '80%',
        maxWidth: '650px',
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          id="fname"
          name="fname"
          label="First Name"
          value={newClient.fname}
          onChange={onChange}
          variant="filled"
        />
        <TextField
          fullWidth
          id="lname"
          name="lname"
          label="Last Name"
          value={newClient.lname}
          onChange={onChange}
          variant="filled"
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          value={newClient.age}
          onChange={onChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-static"
          label="notes"
          fullWidth
          multiline
          rows={12}
          name="notes"
          value={newClient.notes}
          onChange={onChange}
          variant="filled"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default NewPatientForm
