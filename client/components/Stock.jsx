import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStocks } from '../actions/stocks.js'
import StockItem from './StockItem.jsx'

function Stock() {
  const stocksData = useSelector((state) => state.stocks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])

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
