import React from 'react'

import { Formik, Form, Field, FieldArray } from 'formik'

// Here is an example of a form with an editable list.

// Next to each input are buttons for insert and remove.

// If the list is empty, there is a button to add an item.

export const EditStock = () => {
  const stocksData = [
    { id: 1, medName: 'medOne', totalQuantity: 300 },
    { id: 2, medName: 'medTwo', totalQuantity: 200 },
    { id: 3, medName: 'medThree', totalQuantity: 400 },
  ]
  return (
    <div>
      <h1>Stock List</h1>

      <Formik
        initialValues={{ stocks: stocksData }}
        onSubmit={(values) => console.log(values.stocks)}
      >
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
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
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
                          } // insert an empty string at a position
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
                      {/* show this when user has removed all friends from the list */}
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
//----------------------------
// regular React code
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

export default EditStock
