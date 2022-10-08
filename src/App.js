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

  function handleClick(e) {
    const name = e.target.name
    setDayQuality(prevState => ({...prevState, [name]: prevState[name] + 1}))
  }

  return (
    <>
    <h1>hows it goin</h1>
    <ImageGenerator props={dayQuality}/>
    <Buttons handleClick={handleClick} dayQuality={dayQuality}/>
    </>
  );
}

export default App;
