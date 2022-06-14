import request from 'superagent'

const rootUrl = '/api/v1/stocks'

export function getAllStocks() {
  return request.get(rootUrl + '/all').then((res) => res.body)
}

export function updateAllStocks(stocks, navigate) {
  const newStocks = stocks.map((stock) => {
    return {
      medName: stock.medName,
      totalQuantity: Number(stock.totalQuantity),
    }
  })

  return request
    .put(rootUrl + '/update')
    .send(newStocks)
    .then(navigate('/stocks'))
}
