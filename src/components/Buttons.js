export default function Button(props) {

  return (

  <div className="button--display">
      <div className="button--single">
        <button onClick={props.handleClick} name="depressing">depressing</button>
        <p>{props.dayQuality.depressing}</p>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="alright">alright</button>
        <p>{props.dayQuality.alright}</p>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="beautiful">beautiful</button>
        <p>{props.dayQuality.beautiful}</p>
      </div>
    </div>
  )
}
