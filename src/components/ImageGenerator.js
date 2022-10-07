import Beer from "../images/Beer"

export default function ImageGenerator(props) {
  console.log(props)

  return (
    <div className="beer--image">
      <Beer fillOutline="yellow" fillTab="yellow" stroke="red"/>
      <h3>beer of life.</h3>
    </div>
  )
}
