import request from "superagent"

const rootUrl = "/api/v1/prescriptions"

export function getTopFivePrescriptions() {
  return request
    .get(rootUrl + "/topFive")
    .then((res) => {
      return res.body.map((obj) => [obj.medName, obj.count])
    })
    .catch((err) => console.log(err))
}
