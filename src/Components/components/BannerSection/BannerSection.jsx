import PropTypes from "prop-types";
import "./bannersection.scss"

export const BannerSection = ({ data, subTitleRed }) => {
  const styleBeckgrImage = {
    backgroundImage: `url(${data.urlBgImage})`,
  };

  return (
    <section className="banner_wrapper" style={styleBeckgrImage}>
      <div>
        <div className="container">
          <div className={subTitleRed ? `subtitle ${subTitleRed}` : "subtitle"}>
            {data.subtitle}
          </div>
          <div className="title">{data.title}</div>
        </div>
      </div>
    </section>
  );
};

BannerSection.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    urlBgImage: PropTypes.string,
  }),
};
