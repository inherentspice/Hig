export default function Button(props) {

  return (

  <div className="button--display">
      <div className="button--single">
        <button onClick={props.handleClick} name="nah">nah</button>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="alright">alright</button>
      </div>
      <div className="button--single">
        <button onClick={props.handleClick} name="yeah">yeah</button>
      </div>
    </div>
  )
}
