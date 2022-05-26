import React from 'react'
import PrescriptionItem from './PrescriptionItem.jsx'

function Prescriptions(props) {
  const { patientId } = props
  const prescriptions = [
    {
      date: 123243,
      diagnosis: 'cough with sore throat',
      medicines: [
        { id: 1, medName: 'medTwo', prescribedQuantity: 25 },
        { id: 2, medName: 'medThree', prescribedQuantity: 15 },
      ],
    },
    {
      date: 110122,
      diagnosis: 'stomach ache',
      medicines: [
        { id: 1, medName: 'medOne', prescribedQuantity: 16 },
        { id: 2, medName: 'medThree', prescribedQuantity: 6 },
      ],
    },
  ]

  return prescriptions.map((prescription, i) => (
    <PrescriptionItem key={i} prescription={prescription} />
  ))
}

export default Prescriptions
