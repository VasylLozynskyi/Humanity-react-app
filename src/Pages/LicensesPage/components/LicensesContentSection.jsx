import PropTypes from "prop-types"
import "./licensescontentsection.scss";

export const LicensesContentSection = ({ data }) => {
  return (
    <div className="licensescontentsection">
      <h2 className="__title">{data.title}</h2>
      <p className="__subtitle">{data.subtitle}</p>
      <h4 className="__prev">{data.prev}</h4>
      <h2 className="__content-title">{data.body.title}</h2>
      <h4 className="__content-prev">
        {data.body.prev1} :<span> {data.body.text}</span>
      </h4>
      <p>{data.body.content_prev1}</p>
      <h4 className="__content-prev">
        {data.body.prev2} :<span> {data.body.text}</span>
      </h4>
      <p>{data.body.content_prev2}</p>
      <h2 className="__content-title">{data.fonts.title}</h2>
      <p>
        {data.fonts.content} <b>{data.fonts.contentbold}</b> {data.fonts.and}{" "}
        <b>{data.fonts.contentbold2}</b>
      </p>
    </div>
  );
};

LicensesContentSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    prev: PropTypes.string,
    body: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      prev1: PropTypes.string,
      content_prev1: PropTypes.string,
      prev2: PropTypes.string,
      content_prev2: PropTypes.string,
    }),
    fonts: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      contentbold: PropTypes.string,
      and: PropTypes.string,
      contentbold2: PropTypes.string,
    })
  })
}