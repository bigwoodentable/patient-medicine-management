import React from "react"
import { Link } from "react-router-dom"
import TcmAPI from "./TcmAPI"
import Restock from "./Restock"

function Home() {
  return (
    <>
      <TcmAPI />
      <Restock />
    </>
  )
}

export default Home
