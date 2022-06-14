const connection = require('./connection')

function getAllStocks(db = connection) {
  return db('stocks')
    .join('medicines', 'stocks.med_name', 'medicines.name')
    .select('code', 'med_name as medName', 'total_quantity as totalQuantity')
}

//delete existing stock; based on medName, get medId, add totalQuantity
function updateAllStocks(newStocks, db = connection) {
  deleteAllStocks()
    .then(() => null)
    .catch((error) => console.error(error))

  const stocks = newStocks.map(async (stock) => {
    const stockFormatted = {
      med_name: stock.medName,
      total_quantity: stock.totalQuantity,
    }
    return await db('stocks').insert(stockFormatted)
  })

  return Promise.all(stocks)
}

function deleteAllStocks(db = connection) {
  return db('stocks').delete().where('med_name', '!=', 'null')
}

// function countAllStocks(x, db = connection) {
//   console.log('Count')
//   return db('stocks').count('id')
// }

module.exports = {
  getAllStocks,
  updateAllStocks,
}
