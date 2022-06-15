import React from 'react'

import { Formik, Form, Field, FieldArray } from 'formik'
import { updateAllStocks } from '../apis/stocks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

function EditStockForm() {
  const stocksData = useSelector((state) => state.stocks)
  const navigate = useNavigate()

  async function handleSubmit(values) {
    try {
      await updateAllStocks(values.stocks, navigate)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      sx={{
        display: 'grid',
        '& .MuiTextField-root': { m: 1 },
        width: '80%',
        maxWidth: '650px',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Update Stock
      </Typography>

      <Formik initialValues={{ stocks: stocksData }} onSubmit={handleSubmit}>
        {({ values }) => (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Form>
              <FieldArray
                name="stocks"
                render={(arrayHelpers) => (
                  <>
                    {values.stocks && values.stocks.length > 0 ? (
                      values.stocks.map((stock, index) => (
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
                            name={`stocks.${index}.medName`}
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
                            name={`stocks.${index}.totalQuantity`}
                          />
                          <Button
                            color="primary"
                            variant="text"
                            size="large"
                            onClick={() =>
                              arrayHelpers.insert(index + 1, {
                                id: '',
                                medName: '',
                                totalQuantity: 0,
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
