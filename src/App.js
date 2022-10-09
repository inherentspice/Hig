import { useState } from 'react';
import './App.css';
import ImageGenerator from "./components/ImageGenerator"
import Buttons from "./components/Buttons"


function App() {
  const [dayQuality, setDayQuality] = useState(
    {
      depressing: 0,
      alright: 0,
      beautiful: 0
    })

  const [color, setColor]  = useState(getColors(dayQuality))

  const [maxColor, setMaxColor] = useState(getMaxColors(dayQuality))

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

  return (
    <>
    <main style={{border: `50px solid ${maxColor}`}}>
      <h1 style={{color: `${color}`}}>hows it goin</h1>
      <ImageGenerator dayQuality={dayQuality} color={color} maxColor={maxColor}/>
      <Buttons handleClick={handleClick} dayQuality={dayQuality}/>
    </main>
    </>
  );
}

export default App;
