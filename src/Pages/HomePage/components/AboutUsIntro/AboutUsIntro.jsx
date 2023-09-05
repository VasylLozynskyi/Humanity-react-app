import PropTypes from "prop-types"
import video from "assets/video/video.mp4";
import start from "assets/video/start.webp"
import { useNavigate } from "react-router-dom";
import "./aboutusintro.scss";

export const AboutUsIntro = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container aboutusintro">
      <div className="_block">
        <h2>{data.education.title}</h2>
        <p>{data.education.text}</p>
      </div>
      <div className="_block">
        <h2>{data.volunteer.title}</h2>
        <p>{data.volunteer.text}</p>
        <button
          onClick={() => {
            navigate(data.volunteer.linkNavigate);
          }}
        >
          {data.volunteer.nameLink}
        </button>
      </div>
      <div className="_block">
        <video poster={start} controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

AboutUsIntro.propTypes = {
  data: PropTypes.shape({
    education: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    volunteer: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      linkNavigate: PropTypes.string,
      nameLink: PropTypes.string,
    }),
  })
}