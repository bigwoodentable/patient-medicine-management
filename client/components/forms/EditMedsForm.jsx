import React from 'react'

import { Formik, Form, Field, FieldArray } from 'formik'
import { updateAllMeds } from '../../apis/medicines'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

function EditMedsForm() {
  const medsData = useSelector((state) => state.medicines)
  const navigate = useNavigate()

  async function handleSubmit(values) {
    try {
      await updateAllMeds(values.meds, navigate)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      sx={{
        display: 'grid',
        '& .MuiTextField-root': { m: 1 },
        // width: '80%',
        maxWidth: '850px',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Update Medicine Info
      </Typography>

      <Formik initialValues={{ meds: medsData }} onSubmit={handleSubmit}>
        {({ values }) => (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Form>
              <FieldArray
                name="meds"
                render={(arrayHelpers) => (
                  <>
                    {values.meds && values.meds.length > 0 ? (
                      values.meds.map((med, index) => (
                        <Box key={index}>
                          <Field
                            style={{
                              height: 40,
                              width: 160,
                              marginRight: 16,
                              marginTop: 16,
                              border: '0.5px solid grey',
                              borderRadius: '5px',
                            }}
                            name={`meds.${index}.code`}
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
                            name={`meds.${index}.medName`}
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
                            name={`meds.${index}.cost`}
                          />
                          <Button
                            color="primary"
                            variant="text"
                            size="large"
                            onClick={() =>
                              arrayHelpers.insert(index + 1, {
                                code: '',
                                medName: '',
                                cost: 0,
                              })
                            }
                          >
                            <AddIcon />
                          </Button>
                          <Button
                            color="primary"
                            size="large"
                            onClick={() => arrayHelpers.remove(index)} // remove a medicine from the list
                          >
                            <DeleteIcon />
                          </Button>
                        </Box>
                      ))
                    ) : (
                      <Box
                        sx={{
                          display: 'grid',
                          Button: { mt: 3, mr: 2 },
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          color="secondary"
                          variant="outlined"
                          onClick={() =>
                            arrayHelpers.push({
                              id: '',
                              medName: '',
                              totalQuantity: 0,
                            })
                          }
                        >
                          {/* show this when user has removed all medicines from the list */}
                          Add a medicine
                        </Button>
                      </Box>
                    )}

                    <Box
                      sx={{
                        display: 'grid',
                        Button: { mt: 3, mr: 2 },
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        // fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button color="primary" variant="outlined" type="reset">
                        Reset
                      </Button>
                    </Box>
                  </>
                )}
              />
            </Form>
          </Paper>
        )}
      </Formik>
    </Box>
  )
}

export default EditMedsForm
