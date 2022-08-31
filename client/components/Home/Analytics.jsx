// import React, { useEffect, useState } from "react"
// import c3 from "c3"
// import * as d3 from "d3"
// import { Box, Button, Grid, Paper } from "@mui/material"
// import { profitPerPatient, visitsPerPatient } from "../../apis/patients"
// import { getTopFivePrescriptions } from "../../apis/prescriptions"

// function Analytics() {
//   //Pie Chart States
//   const [pieChartData, setPieChartData] = useState({})
//   //Bar Chart States
//   const [barChart, setBarChart] = useState({})
//   const [profitsPerUser, setProfitsPerUser] = useState([])
//   const [categoriesProf, setCategoriesProfit] = useState([])
//   const [categoriesVis, setCategoriesVisits] = useState([])
//   const [visits, setVisits] = useState([])

//   //Pie Chart
//   useEffect(async () => {
//     const topFiveMeds = await getTopFivePrescriptions()
//     setPieChartData(topFiveMeds)
//   }, [])

//   useEffect(() => {
//     const pieChartObj = c3.generate({
//       bindto: "#pieChart",
//       data: {
//         columns: pieChartData,
//         type: "pie",
//       },
//     })
//   }, [pieChartData])

//   //Bar Chart
//   useEffect(() => {
//     const barChartObj = c3.generate({
//       bindto: "#barChart",
//       data: {
//         columns: [["Profits", ...profitsPerUser]],
//         type: "bar",
//       },
//       axis: {
//         x: {
//           type: "category",
//           categories: categoriesProf,
//           tick: {
//             // rotate: 90,
//           },
//         },
//         y: {
//           label: {
//             text: "Dollar (NZD)",
//             position: "outer-middle",
//           },
//           // tick: {
//           //   format: d3.format("$,"),
//           // },
//         },
//       },
//       size: {
//         width: 580,
//         height: 480,
//       },
//       padding: {
//         top: 50,
//         // bottom: 150,
//       },
//       color: {
//         pattern: ["#ff7f0e", "#1f77b4"],
//       },
//       // bar: {
//       //   width: "auto",
//       // },
//     })

//     setBarChart(barChartObj)
//   }, [categoriesProf])

//   useEffect(() => {
//     profitPerPatient()
//       .then((patients) => {
//         const prof = []
//         const cat = []
//         patients.map((patient) => {
//           prof.push(patient.totalProfit)
//           cat.push(patient.name)
//         })
//         setProfitsPerUser(prof)
//         setCategoriesProfit(cat)
//         return null
//       })
//       .catch((err) => console.error(err))

//     visitsPerPatient()
//       .then((patients) => {
//         //Patients' names are not used here but it is provided by the API

//         const vis = []
//         const cat = []
//         patients.map((patient) => {
//           vis.push(patient.visits)
//           cat.push(patient.name)
//         })
//         setVisits(vis)
//         setCategoriesVisits(cat)
//         return null
//       })
//       .catch((err) => console.error(err))
//   }, [])

//   function loadVisits() {
//     barChart.load({
//       columns: [["Visits", ...visits]],
//       categories: categoriesVis,
//       unload: ["Profits"],
//     })

//     barChart.axis.labels({ y: "Visits" })
//     return null
//   }

//   function loadProfits() {
//     barChart.load({
//       columns: [["Profits", ...profitsPerUser]],
//       categories: categoriesProf,
//       unload: ["Visits"],
//     })
//     barChart.axis.labels({ y: "Dollar (NZD)" })
//     return null
//   }

//   return (
//     <>
//       <Paper
//         elevation={2}
//         style={{
//           border: "0.25px solid lightgrey",
//         }}
//       >
//         <Grid
//           container
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
//             <Box id="barChart" style={{ fontFamily: "sans-serif" }} />
//           </Box>
//           <Grid
//             container
//             direction="row"
//             justifyContent="center"
//             alignItems="center"
//             style={{
//               width: "100%",
//               borderTop: "1px solid lightgrey",
//             }}
//           >
//             <Button onClick={loadVisits}> Visits per user</Button>
//             <Button onClick={loadProfits}> Profits per user </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//       {/* Pie */}
//       <Paper
//         elevation={2}
//         style={{
//           border: "0.25px solid lightgrey",
//           margintop: "120px",
//           background: "red",
//         }}
//       >
//         <Grid
//           container
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//           style={{}}
//         >
//           <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
//             <Box id="pieChart" style={{ fontFamily: "sans-serif" }} />
//           </Box>
//         </Grid>
//       </Paper>
//     </>
//   )
// }

// export default Analytics
