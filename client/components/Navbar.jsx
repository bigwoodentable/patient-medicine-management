import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import CameraIcon from "@mui/icons-material/Camera"
import { Link } from "react-router-dom"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import InventoryIcon from "@mui/icons-material/Inventory"

const pages = ["Dashboard", "Patients", "Stocks"]
// const settings = ["Profile", "Account", "Dashboard", "Logout"]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="fixed" style={{ background: "#0F2845" }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <CameraIcon
            color="secondary"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              mr: 1,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none", md: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  p: 1,
                }}
              >
                {pages.map((text, i) => {
                  return (
                    <MenuItem key={text} onClick={handleCloseNavMenu}>
                      <Link
                        to={text === "Dashboard" ? `/` : `/${text}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {" "}
                        {text === "Dashboard" ? (
                          <Typography>
                            {" "}
                            <DashboardIcon
                              style={{
                                paddingTop: "10px",
                              }}
                            />{" "}
                            {text}{" "}
                          </Typography>
                        ) : text === "Patients" ? (
                          <>
                            <Typography>
                              {" "}
                              <GroupIcon
                                style={{
                                  paddingTop: "10px",
                                }}
                              />{" "}
                              {text}{" "}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Typography>
                              {" "}
                              <InventoryIcon
                                style={{
                                  paddingTop: "10px",
                                }}
                              />{" "}
                              {text}{" "}
                            </Typography>
                          </>
                        )}
                      </Link>
                    </MenuItem>
                  )
                })}
              </Box>
            </Menu>
          </Box>
          <CameraIcon
            color="secondary"
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "Sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Inventory Management
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            }}
          >
            {pages.map((text) => (
              <Button
                key={text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={text === "Dashboard" ? `/` : `/${text}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {text}
                </Link>
              </Button>
            ))}
          </Box>
          {/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
