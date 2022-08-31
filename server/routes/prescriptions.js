const express = require("express")

const db = require("../db/prescriptions")

const router = express.Router()

//  /api/v1/prescriptions/topFive
router.get("/topFive", async (req, res) => {
  try {
    const topFivePrescriptions = await db.getTopPrescriptions()
    res.json(topFivePrescriptions)
  } catch (error) {
    console.error(`Cannot get top 5 prescribed medicines`)
  }
  return null
})

module.exports = router
