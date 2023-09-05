import PropTypes from "prop-types";
import "./whatwedo.scss";

export const WhatWeDo = ({ data }) => {
  return (
    <div className="container whatwedosection">
      <div className="subtitle">{data.subtitle}</div>
      <h2>{data.title}</h2>
      <div className="_content">
        {data.content.map((el) => {
          return (
            <div className="_element" key={el.key}>
              <img src={el.src.icon} alt={el.src.alt} />
              <h5>{el.title}</h5>
              <p>{el.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

WhatWeDo.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.shape({
          icon: PropTypes.string,
          alt: PropTypes.string,
        }),
        title: PropTypes.string,
        text: PropTypes.string,
      })
    )
  })
}