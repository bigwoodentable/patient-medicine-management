import request from "superagent"

const rootUrl = "/api/v1/prescriptions"

// /api/v1/prescriptions/topFive
export function getTopFivePrescriptions() {
  return request.get(rootUrl + "/topFive").then((res) => {
    return res.body.map((obj) => [obj.medName, obj.count])
  })
}
