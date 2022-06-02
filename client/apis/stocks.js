import request from 'superagent'

const rootUrl = '/api/v1/stock'

export function getAllStocks() {
  // return request.get(rootUrl + '/all').then((res) => {
  //   return res.body.stock
  // })
  return Promise.resolve([
    { code: 222, medName: 'medTwo', totalQuantity: 7300 },
    { code: 333, medName: 'medThree', totalQuantity: 200 },
    { code: 444, medName: 'medFour', totalQuantity: 400 },
  ])
}

export function updateAllStocks(stocks) {
  // return request.put(rootUrl + '/update').send(newStocks)
  const newStocks = stocks.map((stock) => {
    return {
      medName: stock.medName,
      totalQuantity: Number(stock.totalQuantity),
    }
  })

  console.log(newStocks)
  return null
}
