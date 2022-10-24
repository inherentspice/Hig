import beerService from '../services/beers'
import { useState, useEffect } from "react"
import GetColors from './GetColors'
import GetMaxColor from './GetMaxColor'
import ImageGenerator from './ImageGenerator'


export default function History() {

  const [beerHistory, setBeerHistory] = useState('')


  useEffect(() => {
    beerService
      .getAll()
      .then(response => {
        setBeerHistory(response.data)
      })
  }, [])

  return (
    <main style={{backgroundColor: "rgb(255, 105, 180)"}}>
      <div className="main--contents hist" style={{backgroundColor: "white"}}>
        <h1 style={{color: "rgb(255, 105, 180)"}}>history</h1>
        <div className='history-container'>
        {Array.from(beerHistory).map(beer => {
          return (
            <div className='history-item'>
              <p key={beer.date}>{beer.date}</p>
              <ImageGenerator color={GetColors(beer.content)} maxColor={GetMaxColor(beer.content)}/>
            </div>
          )
        })}
        </div>
      </div>
    </main>
  )
}
