import { SiInstagram, SiFacebook, SiGithub} from "react-icons/si";


export default function Footer() {
  return (
    <div className="footer--container">
      <SiInstagram />
      <SiFacebook />
      <SiGithub />
      {/* <img className="footer--link"src={SiInstagram} alt=""></img>
      <img className="footer--link"src={SiInstagram} alt=""></img>
      <img className="footer--link"src={SiInstagram} alt=""></img> */}
    </div>
  )
}
