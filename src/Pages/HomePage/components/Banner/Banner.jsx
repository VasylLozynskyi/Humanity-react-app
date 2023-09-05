import PropTypes from "prop-types"
import "./banner.scss"

export const Banner = ({ data, subTitleRed }) => {
    const styleBeckgrImage = {
    backgroundImage: `url(${data.urlBgImage})`,
  };

  return (
    <section className="banner_wrapper homebannersection" style={styleBeckgrImage}>
      <div>
        <div className="container">
          <div className={subTitleRed ? `subtitle ${subTitleRed}` : "subtitle"}>
            {data.subtitle}
          </div>
          <div className="title">{data.title}</div>
          <div className="_povetry">
            <div className="_dot">
            </div>
            <hr />
            <div className="_text">{data.text}</div>
          </div>
          <div className="_buttons">
            <button>{data.nameBtn1}</button>
            <button>{data.nameBtn2}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    urlBgImage: PropTypes.string,
    text: PropTypes.string,
    nameBtn1: PropTypes.string,
    nameBtn2: PropTypes.string,
  }),
};