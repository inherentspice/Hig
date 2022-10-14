export default function Button(props) {

  return (

  <div className="button--display">
      <div className="button--single">
        <button onClick={props.handleClick} name="nah">nah</button>
        <p>{props.dayQuality.nah}</p>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="alright">alright</button>
        <p>{props.dayQuality.alright}</p>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="yeah">yeah</button>
        <p>{props.dayQuality.yeah}</p>
      </div>
    </div>
  )
}
