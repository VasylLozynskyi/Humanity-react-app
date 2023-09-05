import PropTypes from "prop-types"
import "./scss/goalmissionsection.scss"

export const GoalMissionSection = ({ data }) => {
  return (
    <div className="flex-block GoalMissionSection">
      <div className="_goalsection">
        <h1>{data.goal.title}</h1>
        <p>{data.goal.text}</p>
        <div className="_tags-container">
          {data.goal.tags.map(el => {return (
            <div key={el.key} className="_tagelement">
              <img src={data.goal.tagarrow.icon} alt={data.goal.tagarrow.alt} />
              <p>{el.title}</p>
            </div>
          )})}
        </div>
        <p>{data.goal.text2}</p>
      </div>
      <div className="_missionsection">
            <h1>{data.mission.title}</h1>
            <p>{data.mission.text}</p>
            <img src={data.mission.image.src} alt={data.mission.image.alt} />
            <div className="_mission-block">
              <h1 className="title">{data.mission.numbertext}</h1>
              <p>{data.mission.subnumbertext}</p>
            </div>
      </div>
    </div>
  )
}

GoalMissionSection.propTypes = {
  data: PropTypes.shape({
    goal: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      text2: PropTypes.string,
      tagarrow: PropTypes.shape({
        icon: PropTypes.string,
        alt: PropTypes.string,
      }),
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
          ]),
          title: PropTypes.string,
        }),
      ),
    }),
    mission: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      numbertext: PropTypes.string,
      subnumbertext: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    })
  })
}