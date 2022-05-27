import { getAllStock } from '../apis/stocks'

export const SET_STOCKS = 'SET_STOCKS'

export function setStocks(stocks) {
  return {
    type: SET_STOCKS,
    stocks,
  }
}

export function fetchStocks() {
  return (dispatch) => {
    return getAllStock().then((stocks) => {
      dispatch(setStocks(stocks))
      return null
    })
  }
}
