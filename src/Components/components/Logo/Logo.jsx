import { logo_header } from "data/importImages"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <section className="logo">
      <Link to="/" className="logolink">
        <img src={logo_header.src} alt={logo_header.alt} />
      </Link>
    </section>
  )
}