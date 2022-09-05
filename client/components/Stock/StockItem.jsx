import React from 'react'
import TableCell from '@mui/material/TableCell'

function StockItem(props) {
  const { code, medName, totalQuantity, cost } = props.stockData
  const { labelId } = props

  return (
    <>
      <TableCell component="th" id={labelId} scope="row" align="center">
        {code}
      </TableCell>
      <TableCell align="center">{medName}</TableCell>
      <TableCell align="center">{cost}</TableCell>
      <TableCell align="center">{totalQuantity}</TableCell>
    </>
  )
}

export default StockItem
