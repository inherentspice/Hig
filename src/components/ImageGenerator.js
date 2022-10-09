import Beer from "../images/Beer"

export default function ImageGenerator({dayQuality, color, maxColor}) {
  return (
      <div className="beer--image" style={{backgroundColor: maxColor}}>
        <Beer fillOutline={maxColor} fillTab={maxColor} stroke={color}/>
        <h3 style={{backgroundColor: color, color: "white"}}>beer.</h3>
      </div>
  )
}
