import React from 'react'

import { Formik, Form, Field, FieldArray } from 'formik'
import { updateAllStocks } from '../apis/stocks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function EditStockForm() {
  const stocksData = useSelector((state) => state.stocks)
  const navigate = useNavigate()

  async function handleSubmit(values) {
    try {
      await updateAllStocks(values.stocks)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Stock List</h1>

      <Formik initialValues={{ stocks: stocksData }} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <FieldArray
              name="stocks"
              render={(arrayHelpers) => (
                <div>
                  {values.stocks && values.stocks.length > 0 ? (
                    values.stocks.map((stock, index) => (
                      <div key={index}>
                        <Field name={`stocks.${index}.medName`} />
                        <Field name={`stocks.${index}.totalQuantity`} />

                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a medicine from the list
                        >
                          -
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.insert(index, {
                              id: '',
                              medName: '',
                              totalQuantity: 0,
                            })
                          } // insert an empty object with the same shape
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
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
                    </button>
                  )}

                  <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
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
