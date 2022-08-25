// App.js

import React, { useEffect, useState } from "react"

import { drawChart } from "./Test-d3"

const dataset = [
  [10, 30, 40, 20],

  [10, 40, 30, 20, 50, 10],

  [60, 30, 40, 20, 30],
]

var i = 0

function Test() {
  const [data, setData] = useState([])

  useEffect(() => {
    changeChart()
  }, [])

  const changeChart = () => {
    drawChart(400, 600, dataset[i++])

    if (i === dataset.length) i = 0
  }

  return (
    <div className="App">
      <h2>Graphs with React</h2>

      <button onClick={changeChart}>Change Data</button>

      <div id="chart"></div>
    </div>
  )
}

export default Test
