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

  console.log('newstock', newStocks)
  return db('stocks').insert(newStocks)
}

function deleteAllStocks(db = connection) {
  console.log('delete')
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
