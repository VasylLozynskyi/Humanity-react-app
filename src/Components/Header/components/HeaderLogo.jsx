import { logo_header } from "data/importImages"
import { Link } from "react-router-dom"

export const HeaderLogo = () => {
  return (
    <section className="headerlogo">
      <Link to="/" className="logo">
        <img src={logo_header.src} alt={logo_header.alt} />
      </Link>
    </section>
  )
}