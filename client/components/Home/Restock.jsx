import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStocks } from "../../actions/stocks"
import { getMedFromAPI } from "../../apis/external"
import _ from "lodash"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

function Test() {
  const [notFound, setNotFound] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStocks())
  }, [])
  const stocks = useSelector((state) => state.stocks)

  const underStock = stocks.filter((stock) => stock.totalQuantity <= 30)

  return (
    <Box>
      <Typography
        style={{
          fontSize: "14px",
          paddingTop: "15px",
        }}
      >
        Stocks under 30g:
      </Typography>
      <ol style={{ fontSize: "14px", marginTop: "3px" }}>
        {underStock.map((stock, i) => (
          <li key={i}>
            {stock.medName}: {stock.totalQuantity}g
          </li>
        ))}
      </ol>
    </Box>
  )
}

export default Test
