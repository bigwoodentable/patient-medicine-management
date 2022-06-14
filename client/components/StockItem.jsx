import React from 'react'
import TableCell from '@mui/material/TableCell'

function StockItem(props) {
  const { code, medName, totalQuantity } = props.stockData
  const { labelId } = props

  return (
    <>
      <TableCell component="th" id={labelId} scope="row" align="center">
        {code}
      </TableCell>
      <TableCell align="center">{medName}</TableCell>
      <TableCell align="center">{totalQuantity}</TableCell>
    </>
  )
}

export default StockItem
