import React, { useEffect } from "react"

import { Formik, Form, Field, FieldArray } from "formik"
import { updateAllStocks } from "../../apis/stocks"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "@material-ui/core/Button"
import {
  Box,
  Dialog,
  FormLabel,
  IconButton,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { fetchStocks } from "../../actions/stocks"
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core"

function EditStockForm({ open, handleClose }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stocksData = useSelector((state) => state.stocks)
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])

  async function handleSubmit(values) {
    try {
      await updateAllStocks(values, handleClose)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        // fullWidth="true"
        sx={{ minWidth: "md" }}
      >
        <Formik initialValues={{ stocks: stocksData }} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <DialogTitle align="center">
                {/* <Typography variant="h5" align="center"> */}
                Edit Stock {/* </Typography> */}
              </DialogTitle>
              <DialogContent>
                <FieldArray
                  name="stocks"
                  render={(arrayHelpers) => (
                    <>
                      {values.stocks && values.stocks.length > 0 ? (
                        values.stocks.map((stock, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              // mt: 4,
                              // justifyContent: "center",
                            }}
                          >
                            <Box>
                              <InputLabel
                                sx={{
                                  fontSize: "12px",
                                  mt: "10px",
                                  // pb: "45px",
                                }}
                              >
                                Code
                              </InputLabel>
                              <Field
                                style={{
                                  height: 40,
                                  width: 160,
                                  marginRight: 8,
                                  marginTop: 2,
                                  border: "0.5px solid grey",
                                  borderRadius: "5px",
                                }}
                                name={`stocks.${index}.code`}
                              />
                            </Box>
                            <Box>
                              <InputLabel
                                sx={{ fontSize: "12px", mt: "10px", p: "0px" }}
                              >
                                Name{" "}
                              </InputLabel>
                              <Field
                                style={{
                                  height: 40,
                                  width: 160,
                                  marginRight: 8,
                                  marginTop: 2,
                                  border: "0.5px solid grey",
                                  borderRadius: "5px",
                                }}
                                name={`stocks.${index}.medName`}
                              />
                            </Box>
                            <Box>
                              <InputLabel
                                sx={{ fontSize: "12px", mt: "10px", p: "0px" }}
                              >
                                Cost/100g{" "}
                              </InputLabel>
                              <Field
                                style={{
                                  height: 40,
                                  width: 160,
                                  marginRight: 8,
                                  marginTop: 2,
                                  border: "0.5px solid grey",
                                  borderRadius: "5px",
                                }}
                                name={`stocks.${index}.cost`}
                              />
                            </Box>
                            <Box>
                              <InputLabel
                                sx={{ fontSize: "12px", mt: "10px", p: "0px" }}
                              >
                                Quantity(g)
                              </InputLabel>
                              <Field
                                style={{
                                  height: 40,
                                  width: 160,
                                  marginRight: 8,
                                  marginTop: 2,
                                  border: "0.5px solid grey",
                                  borderRadius: "5px",
                                }}
                                name={`stocks.${index}.totalQuantity`}
                              />
                            </Box>
                            <Button
                              color="primary"
                              variant="text"
                              size="large"
                              onClick={() =>
                                arrayHelpers.insert(index + 1, {
                                  id: "",
                                  code: "",
                                  medName: "",
                                  cost: 0,
                                  totalQuantity: 0,
                                })
                              }
                            >
                              <AddIcon />
                            </Button>
                            {/* <DialogActions> */}
                            <Button
                              size="large"
                              onClick={() => arrayHelpers.remove(index)} // remove a medicine from the list
                            >
                              <DeleteIcon />
                            </Button>
                            {/* </DialogActions> */}
                          </Box>
                        ))
                      ) : (
                        <Box
                          sx={{
                            display: "grid",
                            Button: { mt: 2, mr: 2 },
                            justifyContent: "center",
                          }}
                        >
                          <DialogActions>
                            <Button
                              color="secondary"
                              variant="outlined"
                              onClick={() =>
                                arrayHelpers.push({
                                  id: "",
                                  code: "",
                                  medName: "",
                                  cost: 0,
                                  totalQuantity: 0,
                                })
                              }
                            >
                              {/* show this when user has removed all medicines from the list */}
                              Add a medicine
                            </Button>
                          </DialogActions>
                        </Box>
                      )}
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
                            // fullWidth
                            type="submit"
                          >
                            Submit
                          </Button>
                        </DialogActions>
                        <DialogActions>
                          <Button
                            color="primary"
                            variant="outlined"
                            type="reset"
                          >
                            Reset
                          </Button>
                        </DialogActions>
                      </Box>
                    </>
                  )}
                />
              </DialogContent>
            </Form>
          )}
        </Formik>
      </Dialog>
    </Box>
  )
}

export default EditStockForm
//----------------------------
// regular React code
//
// function EditStock() {
//   //API get data
// const stocksData = [
//   { id: 1, medName: 'medOne', totalQuantity: 300 },
//   { id: 2, medName: 'medTwo', totalQuantity: 200 },
//   { id: 3, medName: 'medThree', totalQuantity: 400 },
// ]

//   const [newStock, setNewStock] = useState(stocksData)

//   const handleChange = (e, stock, category) => {
//     const newStockArr = newStock.reduce((t, v) => {
//       v.id === stock.id
//         ? t.push({ ...v, [category]: e.target.value })
//         : t.push(v)
//       return t
//     }, [])

//     setNewStock(newStockArr)
//   }

// const handleSubmit = (e) => {
//   e.preventDefault()
//   //send back through API function

//   console.log('newStock: ', newStock)
// }

//   return (
//     <form onSubmit={handleSubmit}>
//       {stocksData.map((stock) => {
//         return (
//           <div key={stock.id}>
//             <input
//               type="text"
//               name="medName"
//               placeholder={stock.medName}
//               value={
//                 newStock.find((stockState) => stockState.id === stock.id)
//                   .medName
//               }
//               onChange={(e) => handleChange(e, stock, 'medName')}
//             />
//             <input
//               //needs to be an number
//               type="text"
//               name="totalQuantity"
//               placeholder={stock.totalQuantity}
//               value={
//                 newStock.find((stockState) => stockState.id === stock.id)
//                   .totalQuantity
//               }
//               onChange={(e) => handleChange(e, stock, 'totalQuantity')}
//             />
//           </div>
//         )
//       })}
//       <input type="submit" />
//     </form>
//   )
// }

//----------------------------
// regular React code
//
// function EditStock() {
//   //API get data
// const stocksData = [
//   { id: 1, medName: 'medOne', totalQuantity: 300 },
//   { id: 2, medName: 'medTwo', totalQuantity: 200 },
//   { id: 3, medName: 'medThree', totalQuantity: 400 },
// ]

//   const [newStock, setNewStock] = useState(stocksData)

//   const handleChange = (e, stock, category) => {
//     const newStockArr = newStock.reduce((t, v) => {
//       v.id === stock.id
//         ? t.push({ ...v, [category]: e.target.value })
//         : t.push(v)
//       return t
//     }, [])

//     setNewStock(newStockArr)
//   }

// const handleSubmit = (e) => {
//   e.preventDefault()
//   //send back through API function

//   console.log('newStock: ', newStock)
// }

//   return (
//     <form onSubmit={handleSubmit}>
//       {stocksData.map((stock) => {
//         return (
//           <div key={stock.id}>
//             <input
//               type="text"
//               name="medName"
//               placeholder={stock.medName}
//               value={
//                 newStock.find((stockState) => stockState.id === stock.id)
//                   .medName
//               }
//               onChange={(e) => handleChange(e, stock, 'medName')}
//             />
//             <input
//               //needs to be an number
//               type="text"
//               name="totalQuantity"
//               placeholder={stock.totalQuantity}
//               value={
//                 newStock.find((stockState) => stockState.id === stock.id)
//                   .totalQuantity
//               }
//               onChange={(e) => handleChange(e, stock, 'totalQuantity')}
//             />
//           </div>
//         )
//       })}
//       <input type="submit" />
//     </form>
//   )
// }
