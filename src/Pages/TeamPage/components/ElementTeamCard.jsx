import PropTypes from "prop-types"
import { SocialLinks } from "Components/components/SocialLinksSection/SocialsLinks"
import "./scss/elementteamcard.scss"

export const ElementTeamCard = ({ data }) => {
  return (
    <div className="elementteamcard">
    <div className="_imageelement">
      <img src={data.photo} alt={data.alt} />
    </div>
    <h4>{data.name} {data.surname}</h4>
    <div className="_sociallinks-card">
      <SocialLinks data={data.sociallinks} />
    </div>
    </div>
  )
}

ElementTeamCard.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    sociallinks: PropTypes.array,
  })
}