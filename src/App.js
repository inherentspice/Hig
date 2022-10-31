import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import About from "./components/About"
import History from './components/History'
import beerService from "./services/beers"
import GetColors from "./components/GetColors";
import GetMaxColors from "./components/GetMaxColor";

function App() {
  const [dayQuality, setDayQuality] = useState('')
  const [color, setColor]  = useState('')
  const [maxColor, setMaxColor] = useState('')

  useEffect(() => {
    const queryDate = getFormattedDate()
    beerService
      .getOne(queryDate)
      .then(response => {
        setDayQuality(() => response.data.content)
      })
      .catch(error => {
        if (error.response.status === 404 || error.response.status === 500) {
          let newBeer = {content: {nah: 0, alright: 0, yeah: 0}, date: queryDate}
          setDayQuality(() => newBeer.content)
          beerService
            .create(newBeer)
          }
      })
  }, [])

  useEffect(() => {
    setColor(() => GetColors(dayQuality))
  }, [dayQuality])

  useEffect(() => {
    setMaxColor(() => GetMaxColors(dayQuality))
  }, [dayQuality])

  const [page, setPage] = useState({home: true, about: false, history: false})

  function getFormattedDate() {
    const date = new Date()
    const queryDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    return queryDate
  }

  function handleClick(e) {
    const name = e.target.name
    const date = getFormattedDate()
    const updatedDayQuality = {
      content: {...dayQuality, [name]: dayQuality[name] + 1},
      date: date
    }
    beerService
      .update(date, updatedDayQuality)
      .then(mongooseUpdatedDate => {
        setDayQuality(() => mongooseUpdatedDate.data.content)
      })
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
