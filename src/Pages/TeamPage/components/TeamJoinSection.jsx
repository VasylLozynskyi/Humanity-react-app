import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import { team_join_banner } from "data/importImages";
import "./scss/teamjoinsection.scss";

export const TeamJoinSection = ({ data }) => {
  const style = { backgroundImage: `url(${team_join_banner})` };
  const navigate = useNavigate();
  return (
    <div className="team-bgsection" style={style}>
      <section className="container content-wrapper">
        <div className="teamjoinedsection">
          <h2 className="subtitle">{data.subtitle}</h2>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <button
            onClick={() => {
              navigate(data.linkBtn);
            }}
          >
            {data.nameBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

TeamJoinSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    linkBtn: PropTypes.string,
    nameBtn: PropTypes.string,
  })
}