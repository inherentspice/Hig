import ImageGenerator from "./ImageGenerator"
import Buttons from "./Buttons"

export default function Main(props) {
  return (
  <main>
    <div className="main--contents"style={{backgroundColor: `${props.maxColor}`}}>
      <h1>hows it goin</h1>
        <ImageGenerator color={props.color} maxColor={props.maxColor}/>
        <Buttons handleClick={props.handleClick} dayQuality={props.dayQuality}/>
    </div>
  </main>
  )
}
