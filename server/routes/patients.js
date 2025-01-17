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

//  /api/v1/patients/revenuePerPatient
router.get("/revenuePerPatient", (req, res) => {
  db.revenuePerPatientTotal()
    .then((rev) => {
      res.json(rev)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get profit per patient data" })
    })
})
//  /api/v1/patients/totalVisits
router.get("/totalVisits", (req, res) => {
  db.visitsPatientTotal()
    .then((visits) => {
      res.json(visits)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot get total visits" })
    })
})

//  /api/v1/patients/update/:id
router.put("/update/:id", (req, res) => {
  const id = req.params.id
  const updatedInfo = req.body

  db.updatePatientById(id, updatedInfo)
    .then((i) => {
      res.json(i)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Cannot update patient details" })
    })
})

module.exports = router
