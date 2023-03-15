import { AddressLinks } from "./components/AddressLinks"
import { HeaderLogo } from "./components/HeaderLogo"
import { NavBar } from "./components/NavBar"
import { SocialLinks } from "./components/SocialsLinks"
import "./header.scss"

export const Header = () => {
  return (
    <header>
      <div className="background-block">
        <div className="container contacts">
          <AddressLinks />
          <SocialLinks />
        </div>
      </div>
      <nav className="container menu">
        <HeaderLogo />
        <NavBar />
      </nav>
    </header> 
  )
}