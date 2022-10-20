import beerService from '../services/beers'
import { useState, useEffect } from "react"


export default function History() {

  const [history, setHistory] = useState('')

  useEffect(() => {
    beerService
      .getAll()
      .then(response => {
        setHistory(response.data)
      })
  }, [])

  return (
    <main style={{backgroundColor: "rgb(255, 105, 180)"}}>
      <div className="main--contents" style={{backgroundColor: "white"}}>
        <h1 style={{color: "rgb(255, 105, 180)"}}>history</h1>
      </div>
    </main>
  )
}
