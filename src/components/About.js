import { useState } from "react"
import Arrow from "../images/arrow-right-circle-outline.svg"

export default function About() {

  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    {text: "let's make beer with our emotions"},
    {text: "click on how you feel today"},
    {text: "beer will change based on how your day is going"},
    {text: "beer will change when other people click too"},
    {text: "we're building together: not just your emotions, not just your clicks"},
    {text: "whole stew of like world-emotions"},
    {text: "check back in to see how everyone's feeling"},
    {text: "click history if you wanna see what emotion beers were brewed in the long ago"},
    {text: "click that arrow button again, and it'll just loop you back to the beginning"}

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
              {messages[messageIndex].image && <img src={messages[messageIndex.image]} alt=""></img>}
            </div>
            <img onClick={handleNextClick} src={Arrow} alt="An arrow to press to see the next message"></img>
          </div>
        </div>
      </main>
  )
}
