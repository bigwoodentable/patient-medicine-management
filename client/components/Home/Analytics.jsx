import React, { useEffect, useState } from "react"
import c3 from "c3"
import * as d3 from "d3"
import { Box, Button, Grid } from "@mui/material"
import { profitPerPatient, visitsPerPatient } from "../../apis/patients"

function Analytics() {
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
      size: {
        width: 480,
      },
      padding: {
        top: 50,
        bottom: 10,
      },
      color: {
        pattern: ["#ff7f0e", "#1f77b4"],
      },
      bar: {
        width: "auto",
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
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box id="chart" style={{ fontFamily: "sans-serif" }} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            width: "100%",
            borderTop: "1px solid lightgrey",
          }}
        >
          <Button onClick={loadVisits}> Visits per user</Button>
          <Button onClick={loadProfits}> Profits per user </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Analytics
