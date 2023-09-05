import { AddressLinks } from "./components/AddressLinks"
import { Logo } from "../components/Logo/Logo"
import { NavBar } from "./components/NavBar"
import { SocialLinks } from "../components/SocialLinksSection/SocialsLinks"
import { companySocialIcons } from "data/companyInfo"
import "./header.scss"

export const Header = () => {
  return (
    <header id="header">
      <div className="background-block">
        <div className="container contacts">
          <AddressLinks />
          <div className="_social-links-content">
            <SocialLinks data={companySocialIcons} />
          </div>
        </div>
      </div>
      <nav className="container menu">
        <Logo />
        <NavBar />
      </nav>
    </header> 
  )
}