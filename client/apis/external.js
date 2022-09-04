const axios = require("axios")

export function getMedFromAPI(searchTerm) {
  const options = {
    method: "GET",
    url: "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo",
    params: { drug: searchTerm },
    headers: {
      "X-RapidAPI-Key": "96be9089f0mshafc1ca49678f1ebp13fe0bjsn99859d74bb9e",
      "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
    },
  }

  return axios
    .request(options)
    .then(function (response) {
      return response.data[0]
    })
    .catch(function (error) {
      console.error(error)
    })
}
