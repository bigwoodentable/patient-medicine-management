import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMeds } from "../actions/medicines"
import { getMedFromAPI } from "../apis/external"
import _ from "lodash"

function Test() {
  const [medApiInfo, setMedApiInfo] = useState("")
  const [medApiTitle, setMedApiTitle] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [notFound, setNotFound] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMeds())
  }, [])
  const meds = useSelector((state) => state.medicines)
  const randomNumb = _.random(0, meds.length - 1)

  useEffect(() => {
    meds[randomNumb] ? setSearchTerm(meds[randomNumb].medName) : null
  }, [meds])
  // console.log("searchTerm", searchTerm)
  // console.log("rand", randomNumb)
  useEffect(() => {
    if (searchTerm) {
      getMedFromAPI(searchTerm)
        .then((info) => {
          setMedApiInfo(info.content)
          setMedApiTitle(info.title)
          return null
        })
        .catch((err) => {
          console.error(err)
          setMedApiInfo(
            `Information about ${searchTerm} is not in the database, please refresh`
          )
          setMedApiTitle(searchTerm)
        })
    }
  }, [searchTerm])

  return (
    <div>
      <h1>{medApiTitle}</h1>
      <p dangerouslySetInnerHTML={{ __html: medApiInfo }}></p>
    </div>
  )
}

export default Test
