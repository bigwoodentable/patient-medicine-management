import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import { addReportById } from '../apis/reports'
import { useParams } from 'react-router-dom'

function NewReportForm() {
  const { id: patientId } = useParams()

  const handleSubmit = async (newReport) => {
    //send back through API function
    try {
      addReportById(newReport, patientId)
    } catch (error) {
      console.error(error)
    }
  }

  //ADD Diagnosis
  const initialValues = {
    reports: {
      diagnosis: '',
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
    },
  }

  return (
    <div>
      <h1>New Report</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values.reports)}
      >
        {({ values }) => (
          <Form>
            <Field
              name="reports.diagnosis"
              as="textarea"
              placeholder="Diagnosis"
            />
            <FieldArray name="reports.prescriptions">
              {({ insert, remove, push }) => (
                <div>
                  {values.reports.prescriptions.length > 0 &&
                    values.reports.prescriptions.map((friend, index) => (
                      <div key={index}>
                        <Field
                          name={`reports.prescriptions.${index}.medName`}
                          placeholder="Medicine Name"
                          type="text"
                        />
                        <ErrorMessage
                          name={`reports.prescriptions.${index}.medName`}
                          component="div"
                          className="field-error"
                        />
                        <Field
                          name={`reports.prescriptions.${index}.prescribedQuantity`}
                          placeholder="Quantity"
                          type="number"
                        />
                        <ErrorMessage
                          name={`reports.prescriptions.${index}.prescribedQuantity`}
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

export default NewReportForm
