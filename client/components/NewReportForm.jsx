import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import { addReportById } from '../apis/reports'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function NewReportForm() {
  const navigate = useNavigate()
  const { id: patientId } = useParams()

  const handleSubmit = async (newReport) => {
    //send back through API function
    try {
      await addReportById(newReport, patientId)
      navigate(`/patient/${patientId}`)
    } catch (error) {
      console.error(error)
    }
  }

  const initialValues = {
    reports: {
      diagnosis: '',
      prescriptions: [
        {
          medName: '',
          prescribedQuantity: 0,
        },
        {
          medName: '',
          prescribedQuantity: 0,
        },
        {
          medName: '',
          prescribedQuantity: 0,
        },
      ],
    },
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
      <Typography variant="h4" sx={{ mb: 4 }}>
        New Report
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values.reports)}
      >
        {({ values }) => (
          <Box
            sx={{
              display: 'grid',
              width: '500px',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
              }}
            >
              <Form>
                <Typography variant="h6">Diagnosis</Typography>
                <Field
                  style={{
                    height: 80,
                    width: 360,
                    marginRight: 16,
                    marginTop: 16,
                    marginBottom: 8,
                    border: '0.5px solid grey',
                    borderRadius: '5px',
                  }}
                  name="reports.diagnosis"
                  as="textarea"
                />
                <Typography variant="h6">Prescription</Typography>
                <FieldArray name="reports.prescriptions">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.reports.prescriptions.length > 0 &&
                        values.reports.prescriptions.map((friend, index) => (
                          <div key={index}>
                            <Field
                              style={{
                                height: 40,
                                width: 160,
                                marginRight: 16,
                                marginTop: 16,
                                border: '0.5px solid grey',
                                borderRadius: '5px',
                              }}
                              name={`reports.prescriptions.${index}.medName`}
                              placeholder="Medicine Name"
                              type="text"
                            />

                            <Field
                              style={{
                                height: 40,
                                width: 160,
                                marginRight: 16,
                                marginTop: 16,
                                border: '0.5px solid grey',
                                borderRadius: '5px',
                              }}
                              name={`reports.prescriptions.${index}.prescribedQuantity`}
                              placeholder="Quantity"
                              type="number"
                            />

                            <Button
                              color="primary"
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon />
                            </Button>
                          </div>
                        ))}
                      <Box
                        sx={{
                          display: 'grid',
                          Button: { mt: 3, mr: 2 },
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={() =>
                            push({
                              medName: '',
                              prescribedQuantity: 0,
                            })
                          }
                        >
                          Add stock
                        </Button>
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Box>
                    </div>
                  )}
                </FieldArray>
              </Form>
            </Paper>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

export default NewReportForm
