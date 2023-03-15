import { useContext } from "react"
import { DataContext } from "Components/Context/DataContext"
import { mail_icon, phone_icon } from "data/importIcons"
import "./addresslinks.scss"

export const AddressLinks = () => {
  const data = useContext(DataContext).header;

  return (
    <section className="addresslinks">
      <div className="content">
        <img src={phone_icon.icon} alt={phone_icon.alt} />
        <a href={`tel:${data.tell}`}>{data.tell}</a>
      </div>
      <div className="content">
        <img src={mail_icon.icon} alt={mail_icon.alt} />
        <a href={`mailto:${data.mail}`}>{data.mail}</a>
      </div>
    </section>
  )
}