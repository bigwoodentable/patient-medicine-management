import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, FieldArray } from 'formik'
import { addReportById } from '../../apis/reports'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Box, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ReportCalc from '../ReportCalc.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeds } from '../../actions/medicines'
import {
  removeSpacesEnds,
  removeSpacesAll,
  loopObj,
  removeEmpty,
  calcFinances,
} from '../../helper'
import Stock from '../Stock'
import { fetchStocks } from '../../actions/stocks'

//onClick calculate - pass prescriptions
//fetch medicine info on redux
//based on medName, multiply the prescribed quantity with the cost
//sum it up
//pass it as props

function NewReportForm() {
  const [totalCosts, setTotalCosts] = useState(0)
  const [totalProfits, setTotalProfit] = useState(0)
  const { id: patientId } = useParams()
  const navigate = useNavigate()

  const medInfo = useSelector((state) => state.stocks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])

  function handleCalc(newReport) {
    const { prescriptions, prescriptionNumber, prescriptionPrice } = newReport
    const finances = calcFinances(
      medInfo,
      prescriptions,
      prescriptionNumber,
      prescriptionPrice
    )
    setTotalCosts(finances.totalCosts)
    setTotalProfit(prescriptionNumber * prescriptionPrice - finances.totalCosts)
  }

  async function handleSubmit(newReport) {
    try {
      await addReportById(
        newReport,
        totalCosts,
        totalProfits,
        medInfo,
        patientId,
        navigate
      )
    } catch (error) {
      console.error(error)
    }
  }

  const initialValues = {
    reports: {
      diagnosis: '',
      prescriptionNumber: '0',
      prescriptionPrice: '0',
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
        {
          medName: '',
          prescribedQuantity: 0,
        },
      ],
    },
  }

  return (
    <Box>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1 },
          width: '80%',
          maxWidth: '650px',
        }}
        noValidate
        autoComplete="off"
      >
        <Link style={{ textDecoration: 'none' }} to={`/patient/${patientId}`}>
          <Button variant="outlined" size="small">
            <ArrowBackIcon sx={{ mr: 1 }} /> Patient
          </Button>
        </Link>
        <Typography variant="h4" sx={{ mb: 4, mt: 3 }}>
          New Report
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values.reports)
          }}
          enableReinitialize
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
                      <Box>
                        {values.reports.prescriptions.length > 0 &&
                          values.reports.prescriptions.map((v, index) => (
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
                            </Box>
                          ))}
                        <Typography sx={{ mt: 2 }} variant="body2">
                          Prescription Number:
                        </Typography>
                        <Field
                          style={{
                            height: 40,
                            width: 180,
                            marginRight: 16,
                            marginTop: 16,
                            marginBottom: 8,
                            border: '0.5px solid grey',
                            borderRadius: '5px',
                          }}
                          label="Prescription Number"
                          name="reports.prescriptionNumber"
                        />

                        <Typography variant="body2">
                          Prescription Price:
                        </Typography>
                        <Field
                          style={{
                            height: 40,
                            width: 180,
                            marginRight: 16,
                            marginTop: 16,
                            marginBottom: 8,
                            border: '0.5px solid grey',
                            borderRadius: '5px',
                          }}
                          label="Prescription Price"
                          name="reports.prescriptionPrice"
                        />

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
                            color="secondary"
                            variant="outlined"
                            onClick={() => handleCalc(values.reports)}
                          >
                            Calculate
                          </Button>
                          <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            // onclick={}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </FieldArray>
                </Form>
              </Paper>
            </Box>
          )}
        </Formik>
      </Box>
      <Box>
        <ReportCalc profits={totalProfits} costs={totalCosts} />
      </Box>
      <Box>
        <Stock />
      </Box>
    </Box>
  )
}

export default NewReportForm
