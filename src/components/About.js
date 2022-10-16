import { useState } from "react"
import Arrow from "../images/arrow-right-circle-outline.svg"
import beerEmotion from "../images/beer-emotion.PNG"
import buttonExample from "../images/button-about.PNG"
import beerTransformed from "../images/beer-emotion-transformed.PNG"
import lonely from "../images/lonely-man.png"
import world from "../images/cooking-earth.png"
import happiness from "../images/happiness.png"
import history from "../images/history.png"
import beerGif from "../images/beer-animated.gif"

export default function About() {

  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    {text: "let's brew beer with our emotions", image: beerEmotion},
    {text: "click on how you feel today", image: buttonExample},
    {text: "beer will change based on how your day is going", image: beerTransformed},
    {text: "beer will change when other people click too", image: beerGif},
    {text: "we're building together: not just your emotions, not just your clicks", image: lonely},
    {text: "whole stew of like world-emotions", image: world},
    {text: "check back in to see how everyone's feeling", image: happiness},
    {text: "click history if you wanna see what was brewed in the before times", image: history},
    {text: "click that arrow button again, and it'll loop you back to the beginning"}

  ]

  function handleNextClick() {
    if (messageIndex !== messages.length - 1) {
      setMessageIndex(prevState => prevState + 1)
    } else {
      setMessageIndex(0)
    }
  }
  return (
      <main style={{backgroundColor: "rgb(55 194 255)"}}>
        <div className="main--contents" style={{backgroundColor: "white"}}>
          <div className="message--slide">
            <div className="message--content">
              <h4 style={{color: "rgb(55 194 255)"}}>{messages[messageIndex].text}</h4>
              {messages[messageIndex].image && <img src={messages[messageIndex].image} alt=""></img>}
            </div>
            <img onClick={handleNextClick} src={Arrow} alt="An arrow to press to see the next message"></img>
          </div>
        </div>
      </main>
  )
}
