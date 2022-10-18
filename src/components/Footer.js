import { SiInstagram, SiFacebook, SiGithub} from "react-icons/si";


export default function Footer() {
  return (
    <div className="footer--container">
      <a href="https://www.instagram.com/inherentspice/" rel="noreferrer" target="_blank"><SiInstagram className="react-icon"/></a>
      <a href="https://www.facebook.com/stephenlehanesmith" rel="noreferrer" target="_blank"><SiFacebook /></a>
      <a href="https://github.com/inherentspice" rel="noreferrer" target="_blank"><SiGithub /></a>
    </div>
  )
}
