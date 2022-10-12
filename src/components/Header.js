import Logo from "../images/hig-logo-v7.png"

export default function Header(props) {
  return (
    <>
    <header>
      <div className="logo--container">
        <h1>hig</h1>
        <img className="header--logo" src={Logo} alt="ai generated cartoon of beer cans"></img>
      </div>
      <button onClick={props.handlePageTransition}>home</button>
      <button onClick={props.handlePageTransition}>about</button>
      <button onClick={props.handlePageTransition}>history</button>



    </header>
    </>
  )
}
