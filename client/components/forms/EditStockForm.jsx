import React, { useEffect } from "react"
import { Formik, Form, Field, FieldArray } from "formik"
import { updateAllStocks } from "../../apis/stocks"
import { useDispatch, useSelector } from "react-redux"
import Button from "@material-ui/core/Button"
import { Box, Dialog, InputLabel } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { fetchStocks } from "../../actions/stocks"
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core"

function EditStockForm({ open, handleClose }) {
  const dispatch = useDispatch()
  const stocksData = useSelector((state) => state.stocks)
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])

  function handleSubmit(values) {
    updateAllStocks(values, handleClose).then((err) => console.error(err))
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
        sx={{ minWidth: "md" }}
      >
        <Formik initialValues={{ stocks: stocksData }} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <DialogTitle align="center">Edit Stock</DialogTitle>
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
                            }}
                          >
                            <Box>
                              <InputLabel
                                sx={{
                                  fontSize: "12px",
                                  mt: "10px",
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
                                Cost per Tablet{" "}
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
                                Quantity(tablets)
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

                            <Button
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
                              {/* this displays when user has removed all input fields from the list to allow them to add input fields back */}
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
