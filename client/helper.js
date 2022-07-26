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
