import PropTypes from "prop-types"
import "./scss/itemslider.scss"

export const ItemSlider = ({ data }) => {
  return (
    <div  className="itemslider" >
      <a href={data.link} target="_blank" rel="noreferrer">
        <img src={data.image.icon} alt={data.image.alt} />
      </a>
    </div>
  )
}

ItemSlider.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.shape({
      icon: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
}