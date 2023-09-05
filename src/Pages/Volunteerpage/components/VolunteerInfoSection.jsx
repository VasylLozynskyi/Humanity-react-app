import PropTypes from "prop-types"
import "./scss/volunteerinfosection.scss";

export const VolunteerInfoSection = ({ data }) => {
  return (
    <div className="volunteerinfosection">
      <h2 className="subtitle">{data.subtitle}</h2>
      <div className="flex-container">
        <div className="flex-block">
          <div>
            <h1>{data.content1.title}</h1>
            <p>{data.content1.text1}</p>
            <br />
            <p>{data.content1.text2}</p>
            <a href={`tel:${data.content1.number}`}>
              <button>{data.content1.nameBtn}</button>
            </a>
          </div>
          <div>
            <img src={data.content1.urlImage1} alt="#" />
          </div>
        </div>
        <div className="flex-block">
          <div>
            <img src={data.content2.urlImage2} alt="#" />
          </div>
          <div>
            <h1>{data.content2.title}</h1>
            <p>{data.content2.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerInfoSection.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    content1: PropTypes.shape({
      title: PropTypes.string,
      text1: PropTypes.string,
      text2: PropTypes.string,
      number: PropTypes.string,
      nameBtn: PropTypes.string,
      urlImage1: PropTypes.string,
    }),
    content2: PropTypes.shape({
      urlImage2: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
}
