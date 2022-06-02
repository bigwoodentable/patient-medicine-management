import React from 'react'

function StockItem(props) {
  const { code, medName, totalQuantity } = props.stockData

  return (
    <>
      <td>{code}</td>
      <td>{medName}</td>
      <td>{totalQuantity}</td>
    </>
  )
}

export default StockItem
