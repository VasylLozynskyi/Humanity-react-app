import PropTypes from "prop-types";
import "./socialslinks.scss";

export const SocialLinks = ({ data }) => {
  return (
    <section className="sociallinks">
      {data.map((el) => {
        return (
          <a key={el.key} href={el.link} rel="noreferrer" target="_blank">
            <img src={el.image.icon} alt={el.image.alt} />
          </a>
        );
      })}
    </section>
  );
};

SocialLinks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      link: PropTypes.string,
      image: PropTypes.shape({
        icon: PropTypes.string,
        alt: PropTypes.string,
      }),
    })
  ),
};
