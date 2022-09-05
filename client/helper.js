export function removeSpacesAll(txt) {
  return txt.replace(/\s/g, "")
}

export function removeSpacesEnds(txt) {
  return txt.replace(/^\s+|\s+$/g, "")
}

export function loopObj(obj, fn) {
  let newObj = {}
  for (const property in obj) {
    newObj = { ...newObj, [property]: fn(obj[property]) }
  }
  return newObj
}

export function removeEmpty(arr) {
  return arr.filter((obj) => {
    return obj.medName !== ""
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
  return { totalCosts: cost.toFixed(2), totalProfits: profit.toFixed(2) }
}
