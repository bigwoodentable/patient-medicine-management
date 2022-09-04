import React, { useEffect, useState } from "react"
import { getReportsById } from "../../apis/reports.js"
import ReportsItem from "./ReportsItem.jsx"
import { useStateIfMounted } from "use-state-if-mounted"

function Reports(props) {
  const { patientId } = props
  const [reports, setReports] = useStateIfMounted([])
  const [deletedReport, setdeletedReport] = useState(0)

  useEffect(async () => {
    getReportsById(patientId)
      .then((reportsList) => {
        setReports(reportsList)
      })
      .catch((err) => console.error(err))
  }, [deletedReport])

  return reports
    .slice(0)
    .reverse()
    .map((report, i) => (
      <ReportsItem
        key={i}
        report={report}
        patientId={patientId}
        setdeletedReport={setdeletedReport}
      />
    ))
}

export default Reports
