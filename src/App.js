import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import About from "./components/About"
import History from './components/History'
import beerService from "./services/beers"

function App() {
  const [dayQuality, setDayQuality] = useState('')
  const [color, setColor]  = useState('')
  const [maxColor, setMaxColor] = useState('')

  useEffect(() => {
    const date = new Date()
    const queryDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    beerService
      .getOne(queryDate)
      .then(response => {
        setDayQuality(() => response.data.content)
      })
      .catch(error => {
        if (error.response.status === 404) {
          let newBeer = {content: {nah: 0, alright: 0, yeah: 0}, date: queryDate}
          setDayQuality(() => newBeer.content)
          beerService
            .create(newBeer)
          }

      })

  }, [])

  useEffect(() => {
    setColor(() => getColors(dayQuality))
  }, [dayQuality])

  useEffect(() => {
    setMaxColor(() => getMaxColors(dayQuality))
  }, [dayQuality])

  const [page, setPage] = useState({home: true, about: false, history: false})

  function getColors(dayQuality) {
    const color = `rgb(${(dayQuality.nah * 23) % 255}, ${(dayQuality.alright * 52) % 255}, ${(dayQuality.yeah * 27) % 255})`
    return color
  }

  function getMaxColors(dayQuality) {
    const maxVoted = Math.max(dayQuality.nah, dayQuality.alright, dayQuality.yeah)
    let nahVal = dayQuality.nah===maxVoted ? (dayQuality.nah * 27) % 255: 255
    let alrightVal = dayQuality.alright===maxVoted ? (dayQuality.alright * 23) % 255: 255
    let yeahVal = dayQuality.yeah===maxVoted ? (dayQuality.yeah * 52) % 255: 255
    if (nahVal===0 && alrightVal===0 && yeahVal===0) {
      nahVal = 255
      alrightVal = 255
      yeahVal = 255
    }
    const maxColor = `rgb(${nahVal}, ${alrightVal}, ${yeahVal})`
    return maxColor
  }

  function handleClick(e) {
    const name = e.target.name
    setDayQuality(prevState => ({...prevState, [name]: prevState[name] + 1}))
    setMaxColor(() => getMaxColors({...dayQuality, [name]: dayQuality[name] + 1}))
    setColor(() => getColors({...dayQuality, [name]:dayQuality[name] + 1}))
  }

  function handlePageTransition(e) {
    const name = e.target.textContent
    let newPage
    if (name === 'home') {
      newPage = {home: true, about: false, history: false}
    } else if (name === 'about') {
      newPage = {home: false, about: true, history: false}
    } else if (name === 'history') {
      newPage = {home: false, about: false, history: true}
    }
    setPage(() => newPage)
  }


  return (
    <>
    <Header handlePageTransition={handlePageTransition}/>
    {page.about && <About />}
    {page.history && <History />}
    {page.home && <Main maxColor={maxColor} color={color} handleClick={handleClick} dayQuality={dayQuality}/>}
    <Footer />
    </>
  );
}

export default App;
