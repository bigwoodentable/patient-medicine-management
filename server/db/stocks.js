const connection = require("./connection")

function getAllStocks(db = connection) {
  return db("stocks").select(
    "code",
    "med_name as medName",
    "total_quantity as totalQuantity",
    "cost"
  )
}

//delete existing stock; based on medName, get medId, add totalQuantity
function updateAllStocks(newStocks, db = connection) {
  deleteAllStocks()
    .then(() => null)
    .catch((error) => console.error(error))

  const stocks = newStocks.map(async (stock) => {
    const stockFormatted = {
      code: stock.code,
      med_name: stock.medName,
      total_quantity: Number(stock.totalQuantity),
      cost: Number(stock.cost),
    }
    return await db("stocks").insert(stockFormatted)
  })

  return Promise.all(stocks)
}

function deleteAllStocks(db = connection) {
  return db("stocks").delete().where("med_name", "!=", "null")
}

function updateQuantByName(prescriptions, db = connection) {
  console.log("updateQuantByName - prescriptions", prescriptions)
  prescriptions.forEach(async (prescription) => {
    console.log("updateQuantByName - inloop prescription", prescription)
    return await db("stocks")
      .where("med_name", "=", prescription.medName)
      .decrement("total_quantity", Number(prescription.prescribedQuantity))
  })
  return null
}

module.exports = {
  getAllStocks,
  updateAllStocks,
  updateQuantByName,
}
