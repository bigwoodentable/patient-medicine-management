import React, { useEffect, useState } from "react"
import c3 from "c3"
import * as d3 from "d3"
import { Box, Grid, Paper } from "@mui/material"
import { getTopFivePrescriptions } from "../../../apis/prescriptions"
import { Typography } from "@material-ui/core"

function PieChart() {
  const [pieChartData, setPieChartData] = useState([])

  useEffect(() => {
    getTopFivePrescriptions().then((topFiveMeds) => {
      console.log("topFiveMeds from api", topFiveMeds)
      const formattedMeds = topFiveMeds.map((arr) => [arr[0], Number(arr[1])])
      console.log("formattedMeds from api", formattedMeds)
      return setPieChartData(formattedMeds)
    })
  }, [])

  useEffect(() => {
    if (pieChartData[0]) {
      console.log("useEffect", pieChartData)
      const pieChartObj = c3.generate({
        bindto: "#pieChart",
        data: {
          columns: pieChartData,
          type: "pie",
        },
        pie: {
          label: {
            format: function (value, ratio, id) {
              return d3.format("")(value)
            },
            show: false,
          },
        },
        tooltip: {
          format: {
            value: function (value, ratio, id, index) {
              return `: ${value}g`
            },
          },
        },
      })
    }
  }, [pieChartData])

  return (
    <>
      <Paper
        elevation={2}
        style={{
          marginTop: "16px",
          border: "0.25px solid lightgrey",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            paddingLeft: "12px",
            paddingTop: "12px",
            paddingBottom: "4px",
          }}
        >
          {" "}
          Top 5 Prescribed Medicines
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Box id="pieChart" style={{ fontFamily: "sans-serif" }} />
          </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default PieChart
