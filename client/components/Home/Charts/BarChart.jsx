import React, { useEffect, useState } from "react"
import c3 from "c3"
import { Box, Button, Grid, Paper } from "@mui/material"
import { revenuePerPatient, visitsPerPatient } from "../../../apis/patients"
import { Typography } from "@material-ui/core"

function BarChart() {
  const [barChart, setBarChart] = useState({})
  const [revenuePerUser, setRevenuePerUser] = useState([])
  const [categoriesRev, setCategoriesRev] = useState([])
  const [categoriesVis, setCategoriesVisits] = useState([])
  const [visits, setVisits] = useState([])

  useEffect(() => {
    const barChartObj = c3.generate({
      bindto: "#barChart",
      data: {
        columns: [["Revenue", ...revenuePerUser]],
        type: "bar",
      },
      axis: {
        x: {
          type: "category",
          categories: categoriesRev,
          tick: {},
        },
        y: {
          label: {
            text: "Dollar (NZD)",
            position: "outer-middle",
          },
        },
      },
      size: {
        width: 580,
        height: 480,
      },
      padding: {
        top: 50,
        // bottom: 150,
      },
      color: {
        pattern: ["#ff7f0e", "#1f77b4"],
      },
      tooltip: {
        format: {
          value: function (value, ratio, id, index) {
            return `$${value}`
          },
        },
      },
    })

    setBarChart(barChartObj)
  }, [categoriesRev])

  useEffect(() => {
    revenuePerPatient()
      .then((patients) => {
        const rev = []
        const cat = []
        patients.map((patient) => {
          rev.push(patient.totalRevenue)
          cat.push(patient.name)
        })
        setRevenuePerUser(rev)
        setCategoriesRev(cat)
        return null
      })
      .catch((err) => console.error(err))

    visitsPerPatient()
      .then((patients) => {
        const vis = []
        const cat = []
        patients.map((patient) => {
          vis.push(patient.visits)
          cat.push(patient.name)
        })
        setVisits(vis)
        setCategoriesVisits(cat)
        return null
      })
      .catch((err) => console.error(err))
  }, [])

  function loadVisits() {
    barChart.load({
      columns: [["Visits", ...visits]],
      categories: categoriesVis,
      unload: ["Revenue"],
    })

    barChart.axis.labels({ y: "Visits" })
    return null
  }

  function loadProfits() {
    barChart.load({
      columns: [["Revenue", ...revenuePerUser]],
      categories: categoriesRev,
      unload: ["Visits"],
    })
    barChart.axis.labels({ y: "Dollar (NZD)" })
    return null
  }

  return (
    <>
      <Paper
        elevation={2}
        style={{
          border: "0.25px solid lightgrey",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            paddingLeft: "12px",
            paddingTop: "12px",
          }}
        >
          {" "}
          Patient Info
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Box id="barChart" style={{ fontFamily: "sans-serif" }} />
          </Box>
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
            <Button onClick={loadVisits}> Top total visits </Button>
            <Button onClick={loadProfits}> Top total revenues </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default BarChart
