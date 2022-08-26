import React, { useEffect, useState } from "react"
import c3 from "c3"
import * as d3 from "d3"
import { Button } from "@mui/material"
import { profitPerPatient, visitsPerPatient } from "../apis/patients"

function Test() {
  const [chart, setChart] = useState({})
  const [profitsPerUser, setProfitsPerUser] = useState([])
  const [categories, setCategories] = useState([])
  const [visits, setVisits] = useState([])

  useEffect(() => {
    profitPerPatient()
      .then((patients) => {
        const prof = []
        const cat = []
        patients.map((patient) => {
          prof.push(patient.totalProfit)
          cat.push(patient.name)
        })
        setProfitsPerUser(prof)
        setCategories(cat)
        return null
      })
      .catch((err) => console.error(err))

    visitsPerPatient()
      .then((patients) => {
        //Patients' names are not used here but it is provided by the API
        const vis = []
        patients.map((patient) => {
          vis.push(patient.visits)
        })
        setVisits(vis)
        return null
      })
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    const chartObj = c3.generate({
      bindto: "#chart",
      data: {
        columns: [["Profits", ...profitsPerUser]],
        type: "bar",
      },
      axis: {
        x: {
          type: "category",
          categories: categories,
        },
        y: {
          label: {
            text: "Dollar (NZD)",
            position: "outer-middle",
          },
          // tick: {
          //   format: d3.format("$,"),
          // },
        },
      },
    })

    setChart(chartObj)
  }, [categories])

  function loadVisits() {
    chart.load({
      columns: [["Visits", ...visits]],
      unload: ["Profits"],
    })

    chart.axis.labels({ y: "Visits" })
    return null
  }

  function loadProfits() {
    chart.load({
      columns: [["Profits", ...profitsPerUser]],
      unload: ["Visits"],
    })
    chart.axis.labels({ y: "Dollar (NZD)" })
    return null
  }

  return (
    <>
      <div id="chart" />
      <Button onClick={loadVisits}>Total Visits</Button>
      <Button onClick={loadProfits}>Total profit per patient</Button>
    </>
  )
}

export default Test
