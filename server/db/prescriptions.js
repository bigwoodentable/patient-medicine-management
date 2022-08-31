const connection = require("./connection")

async function getTopPrescriptions(db = connection) {
  const allMedsPrescribed = await db("prescriptions").distinct("med_name ")
  const medsWithCount = []
  for (let med of allMedsPrescribed) {
    const count = await db("prescriptions")
      .where("med_name", med.med_name)
      .count()

    medsWithCount.push({ medName: med.med_name, count: count[0]["count(*)"] })
  }
  const topFive = medsWithCount.sort((a, b) => b.count - a.count).slice(0, 5)
  return topFive
}
module.exports = { getTopPrescriptions }
