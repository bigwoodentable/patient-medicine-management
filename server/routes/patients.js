const express = require("express")

const db = require("../db/patients")

const router = express.Router()

//  /api/v1/patients/
router.get("/", (req, res) => {
  db.getPatients()
    .then((patients) => {
      res.json(patients)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get names from database" })
    })
})

//  /api/v1/patients/details/:id
router.get("/details/:id", (req, res) => {
  const id = req.params.id

  db.getPatientById(id)
    .then((patient) => {
      res.json(patient)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get name from database" })
    })
})

//  /api/v1/patients/add
router.post("/add", (req, res) => {
  const patient = req.body
  db.insertPatient(patient)
    .then((id) => {
      res.json(id)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot insert patient to database" })
    })
})

//  /api/v1/patients/profitPerPatient
router.get("/profitPerPatient", (req, res) => {
  db.profitPerPatientTotal()
    .then((profit) => {
      // console.log(res)
      res.json(profit)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get profit per patient data" })
    })
})

module.exports = router
