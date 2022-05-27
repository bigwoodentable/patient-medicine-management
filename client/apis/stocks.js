import request from 'superagent'

const rootUrl = '/api/v1/stock'

export function getAllStock() {
  // return request.get(rootUrl + '/all').then((res) => {
  //   return res.body.stock
  // })
  return Promise.resolve([
    { id: 1, medName: 'medOne', totalQuantity: 7300 },
    { id: 2, medName: 'medTwo', totalQuantity: 200 },
    { id: 3, medName: 'medThree', totalQuantity: 400 },
  ])
}

export function updateAllStock(stock) {
  // return request.put(rootUrl + '/update').send(stock)
  console.log(stock)
  return null
}
