import PropTypes from "prop-types"
import "./scss/solutionssection.scss"

export const SolutionsSection = ({ data }) => {
  return (
    <div className="flex-block solutionssection">
      <div>
        <div className="_image">
          <img src={data.imagechild.src} alt={data.imagechild.alt} />
        </div>
        <div className="_quotes">
          <img src={data.icon.icon} alt={data.icon.alt} />
          <h4>{data.speach}</h4>
        </div>
      </div>
      <div className="_content">
        <h2 className="subtitle">{data.subtitle}</h2>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        <div className="_block">
          <p>{data.letter}</p>
        </div>
        <button>{data.nameBtn}</button>
      </div>
    </div>
  )
}

SolutionsSection.propTypes = {
  data: PropTypes.shape({
    imagechild: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    icon: PropTypes.shape({
      icon: PropTypes.string,
      alt: PropTypes.string,
    }),
    subtitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    letter: PropTypes.string,
    nameBtn: PropTypes.string,
  })
}