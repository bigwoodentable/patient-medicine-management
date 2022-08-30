import { getAllStocks } from "../apis/stocks"
import { clearWaiting, setWaiting } from "./waiting"

export const SET_STOCKS = "SET_STOCKS"

export function setStocks(stocks) {
  return {
    type: SET_STOCKS,
    stocks,
  }
}

export function fetchStocks(navigate) {
  return (dispatch) => {
    // dispatch(setWaiting())
    return getAllStocks()
      .then((stocks) => {
        dispatch(setStocks(stocks))
        return null
      })
      .then(() => {
        // dispatch(clearWaiting())
        navigate ? navigate("/Stocks") : null
        return null
      })
      .catch((err) => console.error(err))
  }
}
