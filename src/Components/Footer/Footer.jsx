import { Logo } from "Components/components/Logo/Logo"
import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import "./footer.scss"

export const Footer = () => {
  const data = useContext(DataContext).footer;
  return (
    <footer>
      <div className="container">
        <div>
          <Logo />
          <p>{data.text}</p>
        </div>
      </div>
    </footer>
  )
}