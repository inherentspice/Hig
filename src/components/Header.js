import Logo from "../images/hig-logo-v7.png"

export default function Header() {
  return (
    <>
    <header>
      <div className="logo--container">
        <h1>hig</h1>
        <img className="header--logo" src={Logo} alt="ai generated cartoon of beer cans"></img>
      </div>
    </header>
    </>
  )
}
