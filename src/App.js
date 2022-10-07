import { useState } from 'react';
import './App.css';


function App() {
  const [dayQuality, setDayQuality] = useState(
    {
      depressing: 0,
      numb: 0,
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
    <button onClick={handleClick} name="depressing">depressing</button>
    <p>{dayQuality.depressing}</p>
    <button onClick={handleClick} name="numb">numb</button>
    <p>{dayQuality.numb}</p>
    <button onClick={handleClick} name="alright">alright</button>
    <p>{dayQuality.alright}</p>
    <button onClick={handleClick} name="beautiful">beautiful</button>
    <p>{dayQuality.beautiful}</p>



    </>
  );
}

export default App;
