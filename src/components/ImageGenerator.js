import Beer from "../images/Beer"

function getColors(props) {
  const color = `rgb(${(props.depressing * 23) % 255}, ${(props.alright * 52) % 255}, ${(props.beautiful * 27) % 255})`
  const maxVoted = Math.max(props.depressing, props.alright, props.beautiful)
  const depressingVal = props.depressing===maxVoted ? (props.depressing * 27) % 255: 255
  const alrightVal = props.alright===maxVoted ? (props.alright * 23) % 255: 255
  const beautifulVal = props.beautiful===maxVoted ? (props.beautiful * 52) % 255: 255
  const maxColor = `rgb(${depressingVal}, ${alrightVal}, ${beautifulVal})`
  return [color, maxColor]
}


export default function ImageGenerator({props}) {
  const [color, maxColor]  = getColors(props)
  return (
      <div className="beer--image" style={{backgroundColor: maxColor}}>
        <Beer fillOutline={maxColor} fillTab={maxColor} stroke={color}/>
        <h3 style={{backgroundColor: color, color: "white"}}>beer.</h3>
      </div>
  )
}
