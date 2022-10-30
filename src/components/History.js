import beerService from '../services/beers'
import { useState, useEffect } from "react"
import GetColors from './GetColors'
import GetMaxColor from './GetMaxColor'
import ImageGenerator from './ImageGenerator'
import Arrow from "../images/arrow-right-circle-outline.svg"



export default function History() {

  const [beerHistory, setBeerHistory] = useState('')
  const [beerIndex, setBeerIndex] = useState(-5)
  const [fiveBeers, setFiveBeers] = useState('')


  useEffect(() => {
    beerService
      .getAll()
      .then(response => {
        setBeerHistory(response.data)
      })
  }, [])

  useEffect(() => {
    setFiveBeers(() => {
      const test = Array.from(beerHistory).slice(beerIndex, (beerIndex + 5))
      return test
    })
  }, [beerIndex, beerHistory])


  function handleNextHistClick() {
    if (Array.from(beerHistory).length > beerIndex + 5) {
      setBeerIndex(prevState => prevState += 5)
    } else {
      setBeerIndex(() => 0)
    }
  }

  const HistorySnippet = ({fiveBeers}) => {
    return (
      <>
      {Array.from(fiveBeers).map(beer => {
      return (
        <div key={beer.id} className='history-item'>
          <p>{beer.date}</p>
          <ImageGenerator color={GetColors(beer.content)} maxColor={GetMaxColor(beer.content)}/>
        </div>
      )
    })}
    </>
    )
}
  return (
    <main style={{backgroundColor: "rgb(255, 105, 180)"}}>
      <div className="main--contents hist" style={{backgroundColor: "white"}}>
        <h1 style={{color: "rgb(255, 105, 180)"}}>history</h1>
        <div className='history-container'>
        {beerIndex >= 0 ?
          <HistorySnippet fiveBeers={fiveBeers}/>
          :
          <p className='history-instructions'>Click the arrow to get started</p>}
        <img className='next beer' onClick={handleNextHistClick} src={Arrow} alt="An arrow to press to see the next beers"></img>
        </div>
      </div>
    </main>
  )
}
