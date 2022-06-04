import React from 'react'

function ReportsItem(props) {
  const { date, diagnosis, prescriptions } = props.report

  return (
    <>
      <h3>Date: {date}</h3>
      <h3>diagnosis: {diagnosis}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((medicine, i) => (
            <tr key={i}>
              <td>{medicine.medName}</td>
              <td> {medicine.prescribedQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ReportsItem
