import React, { useEffect, useState } from 'react'
import requests from '@utils/apiDataFetcher'
import '@styles/blocks/main.scss'

const Statistics = () => {
  const [statistics, setstatistics] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const { payload } = await requests.statistics.getAll()
        setstatistics(payload)
      } catch (error) {
        console.log(error)
      }
    })()
  })

  return (
    <main className="main">
      <h2 className="main__heading">Statistics</h2>
    </main>
  )
}

export default Statistics
