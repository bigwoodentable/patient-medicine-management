import { Typography } from "@material-ui/core"
import React from "react"

function ReportCalc(props) {
  const { profits, costs, charge } = props

  return costs === 0 ? null : (
    <>
      <Typography>Amount Charged (Revenue): {charge}</Typography>
      <Typography>Total Costs: {costs}</Typography>
      <Typography>Total Profit: {profits}</Typography>
    </>
  )
}

export default ReportCalc
