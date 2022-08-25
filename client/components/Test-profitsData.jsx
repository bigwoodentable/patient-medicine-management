import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStocks } from "../actions/stocks"
import { getMedFromAPI } from "../apis/external"
import _ from "lodash"
import { profitPerPatient } from "../apis/patients"
import { BarChart } from "@d3/bar-chart-transitions"

function TestProfit() {
  const [patientProfits, setPatientProfits] = useState([])

  try {
    useEffect(async () => {
      const profits = await profitPerPatient()
      const profitsNotNull = profits.filter((person) => person.totalProfit)
      setPatientProfits(profitsNotNull)
    }, [])
  } catch (error) {
    console.error(error)
  }

  console.log(patientProfits)

  return <div></div>
}

export default TestProfit
