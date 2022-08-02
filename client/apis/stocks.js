import request from 'superagent'
import { removeSpacesAll, removeEmpty } from '../helper'

const rootUrl = '/api/v1/stocks'

export function getAllStocks() {
  return request.get(rootUrl + '/all').then((res) => res.body)
}

export function updateAllStocks(values, medInfo, navigate) {
  console.log('API')
  //remove empty entries
  const rmEmptyEntries = removeEmpty(values.stocks)

  //remove white spaces from stock names
  const stocksRmSpaces = rmEmptyEntries.map((stock) => {
    return { ...stock, medName: removeSpacesAll(stock.medName) }
  })

  //check for duplicated entries
  const temp = {}
  const isDup = stocksRmSpaces.every((med) => {
    if (temp[med.medName] === med.medName) {
      return false
    } else {
      temp[med.medName] = med.medName
    }
    return true
  })

  if (!isDup) {
    alert(`Please check if a medicine is repeated`)
    return null
  }

  //Check if entered medicines' names match the names in med info
  const unmatchedMeds = stocksRmSpaces.reduce((total, stock, index) => {
    const matches = medInfo.find((info) => info.medName === stock.medName)
    if (!matches) {
      total.push(stock.medName)
      return total
    } else {
      return total
    }
  }, [])

  if (unmatchedMeds[0]) {
    const combinedUnmatched = unmatchedMeds.join(', ')
    alert(
      `The following medicines are not in the Medicine Info list: ${combinedUnmatched}. Please enter a medicine into the Medicine Info list before adding it to the Current Stocks`
    )
    return null
  }

  const formattedStocks = stocksRmSpaces.map((stock) => {
    return {
      medName: stock.medName,
      totalQuantity: Number(stock.totalQuantity).toFixed(2),
    }
  })

  return request
    .put(rootUrl + '/update')
    .send(formattedStocks)
    .then((res) => res.json)
    .then(navigate('/stocks'))
}
