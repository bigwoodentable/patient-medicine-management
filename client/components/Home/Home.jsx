import React from "react"

import TcmAPI from "./TcmAPI"
import Restock from "./Restock"
import Analytics from "./Analytics"
import { Box } from "@mui/system"
import { Grid, Paper } from "@mui/material"

function Home() {
  return (
    <>
      <Box style={{ background: "pink", padding: 20 }}>
        <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            <Paper
              style={{
                border: "0.5px solid grey",
                background: "lime",
                // maxWidth: "800px",
              }}
            >
              <Analytics />
            </Paper>
            <Paper
              style={{
                marginTop: "16px",
                marginBottom: "8px",
                border: "0.5px solid grey",
                background: "yellow",
                // maxWidth: "800px",
                // minwidth: "720px",
              }}
            >
              <Restock />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              style={{
                minWidth: "400px",
                border: "0.5px solid grey",
                background: "blue",
              }}
            >
              <TcmAPI />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
