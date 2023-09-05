import PropTypes from "prop-types";
import "./aboutus.scss";

export const AboutUs = ({ data }) => {
  return (
    <div className="container flex-block aboutus">
      <div className="_left">
        <div className="subtitle">{data.subtitle}</div>
        <h2>{data.title}</h2>
        <p>{data.text.paragr1}</p>
        <br />
        <p>{data.text.paragr2}</p>
      </div>
      <div className="_right">
        <div className="_donationlist">
          {data.donation.map((el) => {
            return (
            <div className="_element" key={el.key}>
              <div className="_arrow"> <p>✔</p> </div>
              <p>{el.title}</p>
            </div>
            )
          })}
        </div>
        <h5>{data.dontitle}</h5>
        <div className="_lines">
          <div className="_total"></div>
          <div className="_exist"></div>
        </div>
        <div className="_chart">
          <h6>{data.textcollection} - {data.collectioncount}{data.textM}</h6>
          <h6>{data.textgoal} - {data.goalcount}{data.textM}</h6>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.shape({
      paragr1: PropTypes.string,
      paragr2: PropTypes.string,
    }),
    donation: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
    dontitle: PropTypes.string,
    textcollection: PropTypes.string,
    collectioncount: PropTypes.string,
    textM: PropTypes.string,
    textgoal: PropTypes.string,
    goalcount: PropTypes.string,
  })
}