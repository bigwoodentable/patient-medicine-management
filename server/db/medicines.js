const connection = require('./connection')

function getAllMeds(db = connection) {
  return db('medicines').select('med_name as medName', 'code', 'cost')
}

//delete existing stock; based on medName, get medId, add totalQuantity
function updateAllMeds(newMeds, db = connection) {
  deleteAllStocks()
    .then(() => null)
    .catch((error) => console.error(error))

  const stocks = newMeds.map(async (med) => {
    console.log(med)
    const medsFormatted = {
      code: med.code,
      med_name: med.medName,
      cost: med.cost,
    }
    return await db('medicines').insert(medsFormatted)
  })

  return Promise.all(stocks)
}

function deleteAllStocks(db = connection) {
  return db('medicines').delete().where('med_name', '!=', 'null')
}

module.exports = {
  getAllMeds,
  updateAllMeds,
}
