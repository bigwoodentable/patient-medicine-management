const connection = require("./connection")

async function getTopPrescriptions(db = connection) {
  const allMedsPrescribed = await db("prescriptions").distinct("med_name ")
  const medsWithCount = []
  for (let med of allMedsPrescribed) {
    const count = await db("prescriptions")
      .where("med_name", med.med_name)
      .sum("prescribed_quantity")

    // console.log("count - in db", count)
    medsWithCount.push({
      medName: med.med_name,
      //postgres syntax
      // count: Number(count[0]["sum"]),
      //sqlite syntax
      count: count[0]["sum(`prescribed_quantity`)"],
    })
  }
  // console.log("medsWithCount - in db", medsWithCount)
  const topFive = medsWithCount.sort((a, b) => b.count - a.count).slice(0, 5)
  return topFive
}
module.exports = { getTopPrescriptions }
