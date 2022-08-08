console.log('connection', process.env.NODE_ENV)

const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const connection = knex(config[env])

console.log('env', env)
console.log('connection', connection)

module.exports = connection
