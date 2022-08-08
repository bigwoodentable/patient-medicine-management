const express = require('express')
const path = require('path')
// require('dotenv').config()

const stocksRoutes = require('./routes/stocks')
const patientsRoutes = require('./routes/patients')
const reportsRoutes = require('./routes/reports')
const medsRoutes = require('./routes/medicines')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/stocks', stocksRoutes)
server.use('/api/v1/patients', patientsRoutes)
server.use('/api/v1/reports', reportsRoutes)
server.use('/api/v1/medicines', medsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
