// const { v4: uuidv4 } = require('uuid')

// const randomId = () => uuidv4()

// module.exports = {
//   randomId,
// }

export function removeSpacesAll(txt) {
  return txt.replace(/\s/g, '')
}

export function removeSpacesEnds(txt) {
  return txt.replace(/^\s+|\s+$/g, '')
}

export function loopObj(obj, fn) {
  let newObj = {}
  for (const property in obj) {
    newObj = { ...newObj, [property]: fn(obj[property]) }
  }
  return newObj
}

export function removeEmptyPrescriptions(prescriptions) {
  return prescriptions.filter((prescription) => {
    return prescription.medName !== ''
  })
}

export function calcFinances(
  medInfo,
  prescriptions,
  prescriptionNumber,
  prescriptionPrice
) {
  const cost = prescriptions.reduce((total, prescription) => {
    medInfo.forEach((info) =>
      info.medName === removeSpacesAll(prescription.medName)
        ? (total +=
            (info.cost / 100) *
            prescription.prescribedQuantity *
            prescriptionNumber)
        : null
    )
    return total
  }, 0)

  const profit = prescriptionNumber * prescriptionPrice - cost
  return { totalCosts: cost, totalProfits: profit }
}
