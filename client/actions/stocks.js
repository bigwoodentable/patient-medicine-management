import { getAllStocks } from '../apis/stocks'

export const SET_STOCKS = 'SET_STOCKS'

export function setStocks(stocks) {
  console.log('setStocks')
  return {
    type: SET_STOCKS,
    stocks,
  }
}

export function fetchStocks(navigate) {
  console.log('fetchStock')
  return (dispatch) => {
    return getAllStocks()
      .then((stocks) => {
        console.log('fetchStock 1')
        dispatch(setStocks(stocks))
        return null
      })
      .then(() => {
        console.log('fetchstock 2', navigate)
        navigate ? navigate('/') : null
        return null
      })
      .catch((err) => console.error(err))
  }
}
