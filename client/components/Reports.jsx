import React, { useEffect, useState } from 'react'
import { getReportsById } from '../apis/reports.js'
import ReportsItem from './ReportsItem.jsx'

function Reports(props) {
  const { patientId } = props

  const [reports, setReports] = useState([])

  useEffect(async () => {
    try {
      const reportsList = await getReportsById(patientId)
      setReports(reportsList)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return reports
    .slice(0)
    .reverse()
    .map((report, i) => <ReportsItem key={i} report={report} />)
}

export default Reports
