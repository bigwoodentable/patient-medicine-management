import React from 'react'

function PrescriptionItem(props) {
  const { date, diagnosis, medicines } = props.prescription

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
          {medicines.map((medicine, i) => (
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

export default PrescriptionItem
