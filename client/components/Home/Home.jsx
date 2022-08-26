import React from "react"
import { Link } from "react-router-dom"
import TcmAPI from "./TcmAPI"
import Restock from "./Restock"
import Analytics from "./Analytics"

function Home() {
  return (
    <>
      <TcmAPI />
      <Restock />
      <Analytics />
    </>
  )
}

export default Home
