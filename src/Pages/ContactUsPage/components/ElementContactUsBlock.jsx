import PropTypes from "prop-types";
import "./scss/elementcontactusblock.scss";

export const ElementContactUsBlock = ({ data, pathFn }) => {
  return (
    <a className="flex-element-contacts" href={pathFn(data.subcontent)}>
      <div className="_block-icon">
        <img src={data.urlIcon.icon} alt={data.urlIcon.alt} />
      </div>
      <div className="_text-content">
        <h6>{data.title}</h6>
        <p>{data.subcontent}</p>
      </div>
    </a>
  );
};

ElementContactUsBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subcontent: PropTypes.string,
    urlIcon: PropTypes.shape({
      icon: PropTypes.string,
      alt: PropTypes.string,
    }),  
  }),
  pathFn: PropTypes.func,
};
