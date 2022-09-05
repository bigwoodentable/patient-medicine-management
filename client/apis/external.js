import request from "superagent"

export function getMedFromAPI(searchTerm) {
  return request
    .post("https://api.tianapi.com/zhongyao/index")
    .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")
    .send({
      // key: "ce9f59a024df6d8b8c20a40f9e49b16b",
      key: "ea62feb0c41ef3f44c87e93c1be1fa7d",
      word: searchTerm,
    })
    .then((res) => {
      return res.body.newslist[0]
    })
}
