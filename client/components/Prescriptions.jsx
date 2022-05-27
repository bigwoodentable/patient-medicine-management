import React, { useEffect, useState } from 'react'
import { getPrescriptionsById } from '../apis/prescriptions.js'
import PrescriptionItem from './PrescriptionItem.jsx'

function Prescriptions(props) {
  const { patientId } = props

  const [prescriptions, setPrescriptions] = useState([])

  useEffect(async () => {
    try {
      const prescriptionList = await getPrescriptionsById(patientId)
      setPrescriptions(prescriptionList)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return prescriptions.map((prescription, i) => (
    <PrescriptionItem key={i} prescription={prescription} />
  ))
}

export default Prescriptions
