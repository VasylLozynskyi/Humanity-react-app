import PropTypes from "prop-types"
import "./scss/elementpointvolunteer.scss"

export const ElementPointVolunteer = ({ data}) => {
  return (
    <div className="flex-block elementpoint-volunteer">
      <div>
        <div className="_number">
          <h4>{data.number}</h4>
        </div>
      </div>
      <div className="_content">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  )
}

ElementPointVolunteer.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  })
}