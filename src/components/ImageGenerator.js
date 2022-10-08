import Beer from "../images/Beer"

function getColors(props) {
  const color = `rgb(${props.depressing}, ${props.alright}, ${props.beautiful})`
  const maxVoted = Math.max(props.depressing, props.alright, props.beautiful)
  const depressingVal = props.depressing===maxVoted ? props.depressing: 0
  const alrightVal = props.alright===maxVoted ? props.alright: 0
  const beautifulVal = props.beautiful===maxVoted ? props.beautiful: 0
  const maxColor = `rgb(${depressingVal}, ${alrightVal}, ${beautifulVal})`
  return [color, maxColor]
}


export default function ImageGenerator({props}) {
  const [color, maxColor]  = getColors(props)
  const styleTextColor = (props.depressing + props.alright + props.beautiful) <= 550 ? "white" : "black"
  return (
    <div className="beer--image">
      <Beer fillOutline={maxColor} fillTab={maxColor} stroke={color}/>
      <h3 style={{backgroundColor: color, color: styleTextColor}}>beer.</h3>
    </div>

  )
}
