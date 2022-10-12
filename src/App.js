import { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import About from "./components/About"
import History from './components/History'

function App() {
  const [dayQuality, setDayQuality] = useState(
    {
      depressing: 0,
      alright: 0,
      beautiful: 0
    })

  const [color, setColor]  = useState(getColors(dayQuality))

  const [maxColor, setMaxColor] = useState(getMaxColors(dayQuality))

  const [page, setPage] = useState({home: true, about: false})

  function getColors(dayQuality) {
    const color = `rgb(${(dayQuality.depressing * 23) % 255}, ${(dayQuality.alright * 52) % 255}, ${(dayQuality.beautiful * 27) % 255})`
    return color
  }

  function getMaxColors(dayQuality) {
    const maxVoted = Math.max(dayQuality.depressing, dayQuality.alright, dayQuality.beautiful)
    const depressingVal = dayQuality.depressing===maxVoted ? (dayQuality.depressing * 27) % 255: 255
    const alrightVal = dayQuality.alright===maxVoted ? (dayQuality.alright * 23) % 255: 255
    const beautifulVal = dayQuality.beautiful===maxVoted ? (dayQuality.beautiful * 52) % 255: 255
    const maxColor = `rgb(${depressingVal}, ${alrightVal}, ${beautifulVal})`
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
