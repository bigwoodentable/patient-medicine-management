import request from "superagent"

export function getMedFromAPI(searchTerm) {
  return request
    .post("http://api.tianapi.com/zhongyao/index")
    .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")
    .send({
      key: "ce9f59a024df6d8b8c20a40f9e49b16b",
      word: searchTerm,
    })
    .then((res) => {
      return res.body.newslist[0]
    })
}
