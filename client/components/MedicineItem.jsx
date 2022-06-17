import React from 'react'
import TableCell from '@mui/material/TableCell'

function MedicineItem(props) {
  const { code, medName, cost } = props.medData
  const { labelId } = props
  return (
    <>
      <TableCell component="th" id={labelId} scope="row" align="center">
        {code}
      </TableCell>
      <TableCell align="center">{medName}</TableCell>
      <TableCell align="center">{cost}</TableCell>
    </>
  )
}

export default MedicineItem
