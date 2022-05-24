import React from 'react'

function StockItem(props) {
  const { id, medName, totalQuantity } = props.stockData

  return (
    <>
      <td>{medName}</td>
      <td>{totalQuantity}</td>
    </>
  )
}

export default StockItem
