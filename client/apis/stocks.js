import request from "superagent"
import { removeSpacesAll, removeEmpty } from "../helper"

const rootUrl = "/api/v1/stocks"

export function getAllStocks() {
  return request.get(rootUrl + "/all").then((res) => res.body)
}

export function updateAllStocks(values, navigate) {
  //remove empty entries
  const rmEmptyEntries = removeEmpty(values.stocks)

  //remove white spaces and format data
  const formattedStocks = rmEmptyEntries.map((stock) => {
    if (!Number(stock.cost)) {
      alert(
        `Please re-enter a number for the cost of "${stock.cost}" for Code: ${stock.code} Name: ${stock.medName}`
      )
      return null
    } else {
      return {
        code: removeSpacesAll(stock.code).toUpperCase(),
        medName: removeSpacesAll(stock.medName).toUpperCase(0),
        cost: Number(stock.cost).toFixed(2),
        totalQuantity: Number(stock.totalQuantity).toFixed(2),
      }
    }
  })
  //check for duplicated entries
  const temp = {}
  const isDup = formattedStocks.every((med) => {
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

  return request
    .put(rootUrl + "/update")
    .send(formattedStocks)
    .then((res) => res.json)
    .then(navigate("/stocks"))
}
