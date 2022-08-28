import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addPatient } from "./../../apis/patients"
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
  fname: Yup.string().required("First Name Required"),
  lname: Yup.string().required("Last Name Required"),
  age: Yup.number()
    .required("Age Required")
    .positive()
    .integer()
    .typeError("Positive Number Required"),
  // email: Yup.string().email('Invalid email').required('Required'),
})

function NewPatientForm({ open, handleClose }) {
  console.log("NewPatientForm", open)

  const handleSubmit = async (patient) => {
    try {
      await addPatient(patient, handleClose)
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
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1 },
          width: "80%",
          maxWidth: "650px",
        }}
        noValidate
        autoComplete="off"
      >
        <Dialog open={open} onClose={handleClose}>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, errors, touched }) => (
              <Box
                sx={{
                  display: "grid",
                  width: "500px",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                  }}
                >
                  <Form>
                    <DialogTitle sx={{ mb: 4, mt: 3 }}>New Patient</DialogTitle>
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
                    <DialogActions>
                      <Button color="primary" variant="contained" type="submit">
                        Submit
                      </Button>
                    </DialogActions>
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

export default NewPatientForm

// import React, { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { addPatient } from "./../../apis/patients"
// import Button from "@material-ui/core/Button"
// import TextField from "@material-ui/core/TextField"
// import { Box, Paper } from "@mui/material"
// import { Typography } from "@material-ui/core"
// import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik"
// import ArrowBackIcon from "@mui/icons-material/ArrowBack"
// import * as Yup from "yup"
// import { removeSpacesAll } from "../../helper"

// const SignupSchema = Yup.object().shape({
//   fname: Yup.string().required("First Name Required"),
//   lname: Yup.string().required("Last Name Required"),
//   age: Yup.number()
//     .required("Age Required")
//     .positive()
//     .integer()
//     .typeError("Positive Number Required"),
//   // email: Yup.string().email('Invalid email').required('Required'),
// })

// function NewPatientForm() {
//   const navigate = useNavigate()

//   const handleSubmit = async (patient) => {
//     try {
//       await addPatient(patient, navigate)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const initialValues = {
//     fname: "",
//     lname: "",
//     age: "",
//     notes: "",
//   }

//   return (
//     <Box
//       sx={{
//         "& .MuiTextField-root": { m: 1 },
//         width: "80%",
//         maxWidth: "650px",
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Link style={{ textDecoration: "none" }} to={`/patients`}>
//         <Button variant="outlined" size="small">
//           <ArrowBackIcon sx={{ mr: 1 }} /> Patients
//         </Button>
//       </Link>
//       <Box sx={{ mb: 4, mt: 3 }}>
//         <Typography variant="h4">New Patient</Typography>
//       </Box>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={SignupSchema}
//         onSubmit={(values) => handleSubmit(values)}
//       >
//         {({ values, errors, touched }) => (
//           <Box
//             sx={{
//               display: "grid",
//               width: "500px",
//               justifyContent: "center",
//             }}
//           >
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//               }}
//             >
//               <Form>
//                 <Field
//                   style={{
//                     height: 40,
//                     width: 160,
//                     marginRight: 16,
//                     marginTop: 16,
//                     border: "0.5px solid grey",
//                     borderRadius: "5px",
//                   }}
//                   name="fname"
//                   placeholder="First Name"
//                   className={
//                     errors.fname && touched.fname ? "input-error" : null
//                   }
//                   // helperText={errors.fname}
//                 />
//                 <ErrorMessage name="fname" component="span" className="error" />
//                 <Field
//                   style={{
//                     height: 40,
//                     width: 160,
//                     marginRight: 16,
//                     marginTop: 16,
//                     border: "0.5px solid grey",
//                     borderRadius: "5px",
//                   }}
//                   name="lname"
//                   placeholder="Last Name"
//                   className={
//                     errors.lname && touched.lname ? "input-error" : null
//                   }
//                 />
//                 <ErrorMessage name="lname" component="span" className="error" />

//                 <Field
//                   style={{
//                     height: 40,
//                     width: 160,
//                     marginRight: 16,
//                     marginTop: 16,
//                     border: "0.5px solid grey",
//                     borderRadius: "5px",
//                   }}
//                   name="age"
//                   placeholder="Age"
//                   className={errors.age && touched.age ? "input-error" : null}
//                 />
//                 <ErrorMessage name="age" component="span" className="error" />
//                 <Box sx={{ mt: 3 }}>
//                   <Typography variant={"body2"}>Notes:</Typography>
//                 </Box>
//                 <Field
//                   style={{
//                     height: 80,
//                     width: 360,
//                     marginRight: 16,
//                     marginTop: 16,
//                     marginBottom: 8,
//                     border: "0.5px solid grey",
//                     borderRadius: "5px",
//                   }}
//                   name="notes"
//                   as="textarea"
//                 />
//                 <Button color="primary" variant="contained" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Paper>
//           </Box>
//         )}
//       </Formik>
//     </Box>
//   )
// }

// export default NewPatientForm
