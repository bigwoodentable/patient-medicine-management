const express = require("express")

const db = require("../db/stocks")

const router = express.Router()

//  /api/v1/stocks/all
router.get("/all", (req, res) => {
  db.getAllStocks()
    .then((stocks) => {
      res.json(stocks)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get all stocks from database" })
    })
})

//Review if updating all the stocks everytime there's an edit is the best method
// it auto increments the id, so only need [{"med_name": "name}...]
// /api/v1/stocks/update
router.put("/update", (req, res) => {
  const newStocks = req.body

  db.updateAllStocks(newStocks)
    .then((result) => {
      return res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot update stocks in database" })
    })
})

module.exports = router
