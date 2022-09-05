import { BottomNavigation, Box } from "@material-ui/core"
import GitHubIcon from "@mui/icons-material/GitHub"
import React from "react"

import { ExternalLink } from "react-external-link"

function Footer() {
  return (
    <Box className="footer">
      <BottomNavigation style={{ background: "#0F2145" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <ExternalLink href="#" target="_blank" rel="noreferrer">
              <GitHubIcon
                align="right"
                fontSize="large"
                style={{ color: "lightgrey" }}
              />
            </ExternalLink>
          </Box>
        </Box>
      </BottomNavigation>
    </Box>
  )
}

export default Footer
