import PropTypes from "prop-types"
import { ElementPointVolunteer } from "./ElementPointVolunteer"
import "./scss/becomevolunteersection.scss"
import { FormVolunteerSectionContainer } from "./containers/FormVolunteerSectionContainer"
import { useState } from "react"

export const BecomeVolunteerSection = ({ data }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="becomevolunteersection">
      <h2 className="subtitle">{data.subtitle}</h2>
      <div className="flex-block">
        <div>
          <h2>{data.title}</h2>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <div className="_points">
            {data.points.map(el => <ElementPointVolunteer key={el.key} data={el} />)}
          </div>
          <button onClick={() => setShowForm(true)}>{data.nameBtn}</button>
        </div>
        <div className="form-volunteersection">
          <FormVolunteerSectionContainer data={data.form} showForm={showForm}/>
        </div>
      </div>
    </div>
  )
}

BecomeVolunteerSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    points: PropTypes.array,
    nameBtn: PropTypes.string,
  })
 
}