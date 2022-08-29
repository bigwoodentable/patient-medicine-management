import React from "react"

import TcmAPI from "./TcmAPI"
import Restock from "./Restock"
import Analytics from "./Analytics"
import { Box } from "@mui/system"
import { Grid, Paper, Typography } from "@mui/material"

function Home() {
  return (
    <>
      <Box
        style={{
          padding: 20,
          background: "linear-gradient(to bottom, #136F96, #A7C5D1, #A7C5D1)",
          height: "100vh",
        }}
      >
        <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={12} md={7}>
            <Paper
              elevation={2}
              style={{
                border: "0.25px solid lightgrey",
              }}
            >
              <Typography
                style={{
                  paddingLeft: "12px",
                  paddingTop: "12px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Analytics
              </Typography>
              <Analytics />
            </Paper>
            <Paper
              elevation={2}
              style={{
                marginTop: "16px",
                marginBottom: "8px",
                border: "0.25px solid lightgrey",

                fontFamily: "sans-serif",
              }}
            >
              {" "}
              <Typography
                style={{
                  paddingLeft: "12px",
                  paddingTop: "12px",
                  paddingBottom: "4px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Reminders
              </Typography>
              <Box
                style={{
                  borderTop: "0.25px solid lightgrey",
                  paddingLeft: "15px",
                }}
              >
                <Restock />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Paper elevation={2}>
              <Typography
                style={{
                  paddingLeft: "12px",
                  paddingTop: "12px",
                  paddingBottom: "4px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Did you know?
              </Typography>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                  minWidth: "400px",
                  padding: "35px",
                  maxHeight: "700px",
                }}
              >
                <Box
                  style={{
                    maxWidth: "90%",
                    border: "0.25px solid lightgrey",
                    align: "center",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    marginTop: "40px",
                    maxHeight: "500px",
                    overflowY: "scroll",
                  }}
                >
                  <TcmAPI />
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
