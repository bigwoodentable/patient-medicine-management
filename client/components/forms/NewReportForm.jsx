import React, { useEffect, useState } from "react"
import { Formik, Field, Form, FieldArray } from "formik"
import { addReportById } from "../../apis/reports"
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { Box, Paper, ThemeProvider, Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ReportCalc from "../ReportCalc.jsx"
import { useDispatch, useSelector } from "react-redux"
import {
  removeSpacesEnds,
  removeSpacesAll,
  loopObj,
  removeEmpty,
  calcFinances,
} from "../../helper"
import Stock from "../Stock"
import { fetchStocks } from "../../actions/stocks"
import { createTheme, Grid } from "@material-ui/core"
import AddIcon from "@mui/icons-material/Add"
import { green, grey, indigo, orange, red } from "@material-ui/core/colors"
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
      diagnosis: "",
      prescriptionNumber: "0",
      prescriptionPrice: "0",
      prescriptions: [
        {
          medName: "",
          prescribedQuantity: 0,
        },
        {
          medName: "",
          prescribedQuantity: 0,
        },
        {
          medName: "",
          prescribedQuantity: 0,
        },
        {
          medName: "",
          prescribedQuantity: 0,
        },
      ],
    },
  }

  return (
    <Box style={{ margin: "80px 25px 25px 25px" }}>
      <Link style={{ textDecoration: "none" }} to={`/patient/${patientId}`}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ margin: "30px 0px 10px 25px" }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} /> Patient
        </Button>
      </Link>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
        <Box sx={{ flexGrow: "1", flexShrink: "1" }}>
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
                  display: "grid",
                  minWidth: "550px",
                  justifyContent: "center",
                  // bgcolor: "yellow",
                  p: 1,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                  }}
                  // style={{ background: "red" }}
                >
                  <Form>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "18",
                        marginBottom: "10px",
                      }}
                    >
                      Diagnosis
                    </Typography>
                    <Field
                      style={{
                        height: 80,
                        width: 360,
                        margin: "16 16 8 0",
                        border: "0.5px solid grey",
                        borderRadius: "5px",
                      }}
                      name="reports.diagnosis"
                      as="textarea"
                    />
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "18",
                        marginTop: "20px",
                      }}
                    >
                      Prescriptions
                    </Typography>
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
                                    border: "0.5px solid grey",
                                    borderRadius: "5px",
                                  }}
                                  name={`reports.prescriptions.${index}.medName`}
                                  placeholder="Medicine Name"
                                  type="text"
                                />
                                <Field
                                  style={{
                                    height: 40,
                                    // width: 160,
                                    margin: "16, 16, 0, 0",
                                    border: "0.5px solid grey",
                                    borderRadius: "5px",
                                  }}
                                  name={`reports.prescriptions.${index}.prescribedQuantity`}
                                  placeholder="Quantity"
                                  type="number"
                                />
                                <Button
                                  color="primary"
                                  variant="text"
                                  size="large"
                                  onClick={() =>
                                    insert(index + 1, {
                                      id: "",
                                      medName: "",
                                      prescribedQuantity: 0,
                                    })
                                  }
                                >
                                  <AddIcon />
                                </Button>
                                <Button
                                  color="delete"
                                  onClick={() => remove(index)}
                                >
                                  <DeleteIcon />
                                </Button>
                              </Box>
                            ))}
                          <Typography
                            sx={{ mt: 4 }}
                            style={{ fontSize: "14px" }}
                          >
                            Number of prescriptions:
                          </Typography>
                          <Field
                            style={{
                              height: 40,
                              width: 180,
                              marginRight: 16,
                              marginBottom: 8,
                              border: "0.5px solid grey",
                              borderRadius: "5px",
                            }}
                            label="Prescription Number"
                            name="reports.prescriptionNumber"
                          />

                          <Typography style={{ fontSize: "14px" }}>
                            Price per prescription:
                          </Typography>
                          <Field
                            style={{
                              height: 40,
                              width: 180,
                              margin: "0 16 8 0",
                              border: "0.5px solid grey",
                              borderRadius: "5px",
                            }}
                            label="Prescription Price"
                            name="reports.prescriptionPrice"
                          />
                          <Box
                            sx={{
                              display: "flex",
                              Button: { mt: 3, mr: 2 },
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                            style={{
                              borderTop: "1px solid lightgrey",
                              margin: "25px 0px 25px 0px",
                            }}
                          >
                            <Button
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

        <Box sx={{ flexGrow: "3", flexShrink: "3" }}>
          <Box style={{ margin: "8px 25px 0px 25px" }}>
            <Paper elevation={3} sx={{ height: "125px", p: 2 }}>
              <Typography style={{ fontWeight: "bold", fontSize: 18 }}>
                Calculations
              </Typography>
              <Box
                style={{
                  borderTop: "1px solid lightgrey",
                  margin: "10px 0px 20px 0px",
                  padding: "10px 0px 10px 0px",
                  // background: "red",
                }}
              >
                <ReportCalc profits={totalProfits} costs={totalCosts} />
              </Box>
            </Paper>
          </Box>

          <Stock />
        </Box>
      </Box>
    </Box>
  )
}

export default NewReportForm
