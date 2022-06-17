const express = require('express')

const db = require('../db/medicines')

const router = express.Router()

//  /api/v1/medicines/all
router.get('/all', (req, res) => {
  db.getAllMeds()
    .then((meds) => {
      res.json(meds)
      return null
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Cannot get all medicine info from database' })
    })
})

// /api/v1/medicines/update
router.put('/update', (req, res) => {
  const newMeds = req.body

  db.updateAllMeds(newMeds)
    .then((result) => {
      return res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Cannot update medicines info in database' })
    })
})

module.exports = router
