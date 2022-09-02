import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addPatient, updatePatientById } from "./../../apis/patients"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { Box, Paper } from "@mui/material"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import * as Yup from "yup"
import { removeSpacesAll } from "../../helper"
import AddIcon from "@mui/icons-material/Add"

const SignupSchema = Yup.object().shape({
  fname: Yup.string().required(
    <Typography style={{ fontSize: "11px", color: "red" }}>
      First Name Required
    </Typography>
  ),
  lname: Yup.string().required(
    <Typography style={{ fontSize: "11px", color: "red" }}>
      Last Name Required{" "}
    </Typography>
  ),
  age: Yup.number()
    .required(
      <Typography style={{ fontSize: "11px", color: "red" }}>
        Age Required
      </Typography>
    )
    .positive()
    .integer()
    .typeError(
      <Typography style={{ fontSize: "11px", color: "red" }}>
        Positive Number Required
      </Typography>
    ),
  // email: Yup.string().email('Invalid email').required('Required'),
})

function EditPatientForm({ open, handleClose, patientId, setUpdated }) {
  const handleSubmit = async (patient) => {
    try {
      await updatePatientById(patientId, patient)
      setUpdated((updated) => updated + 1)
      handleClose()
    } catch (error) {
      console.error(error)
    }
  }

  const initialValues = {
    fname: "",
    lname: "",
    age: "",
    notes: "",
  }

  return (
    <>
      <Box>
        <Dialog open={open} onClose={handleClose}>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, errors, touched }) => (
              <Box display="grid" width="500px" justifyContent="center">
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                  }}
                >
                  <Form>
                    <DialogTitle sx={{ mb: 4, mt: 3 }} align="center">
                      {" "}
                      Edit Patient Details
                    </DialogTitle>
                    <DialogContent>
                      <Field
                        style={{
                          height: 40,
                          width: 160,
                          marginRight: 16,
                          marginTop: 16,
                          border: "0.5px solid grey",
                          borderRadius: "5px",
                        }}
                        name="fname"
                        placeholder="First Name"
                        className={
                          errors.fname && touched.fname ? "input-error" : null
                        }
                        // helperText={errors.fname}
                      />
                      <ErrorMessage
                        name="fname"
                        component="span"
                        className="error"
                      />
                      <Field
                        style={{
                          height: 40,
                          width: 160,
                          marginRight: 16,
                          marginTop: 16,
                          border: "0.5px solid grey",
                          borderRadius: "5px",
                        }}
                        name="lname"
                        placeholder="Last Name"
                        className={
                          errors.lname && touched.lname ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="lname"
                        component="span"
                        className="error"
                      />

                      <Field
                        style={{
                          height: 40,
                          width: 160,
                          marginRight: 16,
                          marginTop: 16,
                          border: "0.5px solid grey",
                          borderRadius: "5px",
                        }}
                        name="age"
                        placeholder="Age"
                        className={
                          errors.age && touched.age ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="age"
                        component="span"
                        className="error"
                      />
                      <Box sx={{ mt: 3 }}>
                        <Typography variant={"body2"}>Notes:</Typography>
                      </Box>
                      <Field
                        style={{
                          height: 80,
                          width: 360,
                          marginRight: 16,
                          marginTop: 16,
                          marginBottom: 8,
                          border: "0.5px solid grey",
                          borderRadius: "5px",
                        }}
                        name="notes"
                        as="textarea"
                      />
                    </DialogContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 4,
                        button: { mt: 2, mr: 2 },
                        justifyContent: "center",
                        borderTop: "0.25px solid lightgrey",
                      }}
                    >
                      <DialogActions>
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </DialogActions>
                    </Box>
                  </Form>
                </Paper>
              </Box>
            )}
          </Formik>
        </Dialog>
      </Box>
    </>
  )
}

export default EditPatientForm
