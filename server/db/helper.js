const { v4: uuidv4 } = require("uuid")

const randomId = () => uuidv4()

const randomNum = () => Math.floor(Math.random() * 1000) + 200

const randomCost = () => Math.floor(Math.random() * 100) + 1

module.exports = {
  randomId,
  randomNum,
  randomCost,
}
