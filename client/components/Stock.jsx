import React from 'react'
import StockItem from './StockItem.jsx'

function Stock() {
  //API get data
  const stocksData = [
    { id: 1, medName: 'medOne', totalQuantity: 300 },
    { id: 2, medName: 'medTwo', totalQuantity: 200 },
    { id: 3, medName: 'medThree', totalQuantity: 400 },
  ]

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {stocksData.map((stockData, i) => (
          <tr key={i}>{<StockItem stockData={stockData} />}</tr>
        ))}
      </tbody>
    </table>
  )
}

export default Stock
