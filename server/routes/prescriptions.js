const express = require("express")

const db = require("../db/prescriptions")

const router = express.Router()

//  /api/v1/prescriptions/topFive
router.get("/topFive", (req, res) => {
  db.getTopPrescriptions()
    .then((topFivePrescriptions) => {
      return res.json(topFivePrescriptions)
    })
    .catch((err) => console.error(`Cannot get top 5 prescribed medicines`))

  return null
})

module.exports = router
