import { useState } from "react"
import Arrow from "../images/arrow-right-circle-outline.svg"

export default function About() {

  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    "let's make beer with our emotions",
    "click on how you feel today",
    "the beer will change based on how your day is going",
    "beer will change when other people click too",
    "we're building together: not just your emotions, not just your clicks",
    "a whole stew of like world-emotions",
    "check back in to see how everyone's feeling",
    "click history if you wanna see what emotion beers were brewed in the long ago",
    "if you click that arrow button again, it'll just loop you back to the beginning"

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
            <div className="message-content">
              <h2 style={{color: "rgb(55 194 255)"}}>{messages[messageIndex]}</h2>
            </div>
            <img onClick={handleNextClick} src={Arrow} alt="An arrow to press to see the next message"></img>
          </div>
        </div>
      </main>
  )
}
