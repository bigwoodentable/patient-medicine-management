import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStocks } from "../../actions/stocks"
import { getMedFromAPI } from "../../apis/external"
import _ from "lodash"

function Test() {
  const [notFound, setNotFound] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])
  const stocks = useSelector((state) => state.stocks)

  const underStock = stocks.filter((stock) => stock.totalQuantity <= 30)

  return (
    <div>
      <h3>Stock under 30g: </h3>
      {underStock.map((stock, i) => (
        <p key={i}>
          {stock.medName} {stock.totalQuantity}g remaining
        </p>
      ))}
    </div>
  )
}

export default Test
