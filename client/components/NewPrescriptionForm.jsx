import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import { addPrescriptionById } from '../apis/prescriptions'
import { useParams } from 'react-router-dom'

function NewPrescriptionForm() {
  const { id: patientId } = useParams()

  const handleSubmit = async (newPrescription) => {
    //send back through API function
    try {
      await addPrescriptionById(newPrescription, patientId)
    } catch (error) {
      console.error(error)
    }
  }

  const initialValues = {
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
    ],
  }

  return (
    <div>
      <h1>New Prescription</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values.prescriptions)}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="prescriptions">
              {({ insert, remove, push }) => (
                <div>
                  {values.prescriptions.length > 0 &&
                    values.prescriptions.map((friend, index) => (
                      <div key={index}>
                        <Field
                          name={`prescriptions.${index}.medName`}
                          placeholder="Medicine Name"
                          type="text"
                        />
                        <ErrorMessage
                          name={`prescriptions.${index}.medName`}
                          component="div"
                          className="field-error"
                        />
                        <Field
                          name={`prescriptions.${index}.prescribedQuantity`}
                          placeholder="Quantity"
                          type="number"
                        />
                        <ErrorMessage
                          name={`prescriptions.${index}.prescribedQuantity`}
                          component="div"
                          className="field-error"
                        />
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() =>
                      push({
                        medName: '',
                        prescribedQuantity: 0,
                      })
                    }
                  >
                    Add stock
                  </button>
                  <button type="submit">Submit</button>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewPrescriptionForm
