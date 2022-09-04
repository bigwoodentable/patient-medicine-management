import React, { useEffect, useRef, useState } from "react"
import { visuallyHidden } from "@mui/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  TableSortLabel,
  FormControlLabel,
  Switch,
  Button,
  IconButton,
  Grid,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import { getPatients } from "../../apis/patients.js"
import AddIcon from "@mui/icons-material/Add"
import NewPatientForm from "../forms/NewPatientForm.jsx"
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const headCells = [
  {
    id: "fname",
    numeric: true,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "button",
    numeric: false,
    disablePadding: true,
    label: "",
  },
]

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{ fontWeight: "bold" }}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

function ExistingPatients() {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("Code")
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPatients()
      .then((patientNames) => {
        const sortedPatients = patientNames.sort((a, b) =>
          a.fname.localeCompare(b.fname)
        )
        setLoading(false)
        setRows(sortedPatients)
      })
      .catch((err) => console.error(err))
  }, [open])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <>
      <NewPatientForm open={open} handleClose={handleClose} />
      {!loading && (
        <Grid
          container
          justifyContent="center"
          alignItems="top"
          style={{ minHeight: "100vh", paddingTop: "20px" }}
        >
          <Box
            style={{
              width: "100%",
              margin: "0px 25px 0px 25px",
            }}
          >
            <Paper>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  color="primary"
                  size="large"
                  onClick={handleClickOpen}
                >
                  <AddIcon />
                </IconButton>
              </Box>
              <TableContainer>
                <Table size={dense ? "small" : "medium"}>
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {rows
                      .slice()
                      .sort(getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`

                        return (
                          <TableRow hover tabIndex={-1} key={index}>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              align="center"
                            >
                              {`${row.fname} ${row.lname}`}
                            </TableCell>
                            <TableCell align="center">
                              <Link
                                to={`/patient/${row.patientId}`}
                                style={{ textDecoration: "none" }}
                              >
                                <Button variant="contained">
                                  <PermIdentityOutlinedIcon
                                    style={{
                                      marginRight: "4px",
                                      fontSize: "medium",
                                    }}
                                  />
                                  <Typography
                                    variant="body2"
                                    style={{ marginTop: "2px" }}
                                  >
                                    Details
                                  </Typography>
                                </Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 30, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </Box>
        </Grid>
      )}
      {loading && (
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          style={{
            height: "100vh",
            paddingBottom: "100px",
          }}
        >
          {/* <LinearProgress color="secondary" style={{ width: "60%" }} /> */}
        </Grid>
      )}
    </>
  )
}

export default ExistingPatients
