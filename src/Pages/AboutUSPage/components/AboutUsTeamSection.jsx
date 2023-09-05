import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import { SocialLinks } from "Components/components/SocialLinksSection/SocialsLinks";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import "./scss/aboutusteamsection.scss";

export const AboutUsTeamSection = ({ data }) => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1240 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1239, min: 800 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 799, min: 307 },
      items: 1,
      minwidth: "307px",
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="aboutusteamsection">
      <section className="container content-wrapper">
        <h2 className="subtitle">{data.subtitle}</h2>
        <h1>{data.title}</h1>
        <div className="_volunteers-cards">
          <div className="_cards-qarousel">
            <div className="slider_container">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                autoPlay={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                arrows={true}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                containerClass="carousel-container"
              >
                {data.teamData.map((el) => (
                  <div className="_item" key={el.key}>
                    <div className="_imageelement">
                      <img src={el.photo} alt={el.alt} />
                    </div>
                    <h4>{el.name} {el.surname}</h4>
                    <div className="_sociallinks-card">
                      <SocialLinks data={el.sociallinks} />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="_become-block">
            <div className="_hand-icon">
              <img src={data.joinblock.icon.icon} alt={data.joinblock.icon.alt} />
            </div>
            <h2>{data.joinblock.title}</h2>
            <p>{data.joinblock.text}</p>
            <button onClick={() => {navigate(data.joinblock.linkBtn)}}>{data.joinblock.nameBtn}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutUsTeamSection.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    teamData: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string,
        alt: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        sociallinks: PropTypes.array,
      }),
    ),
    joinblock: PropTypes.shape({
      icon: PropTypes.shape({
        icon: PropTypes.string,
        alt: PropTypes.string,
      }),
      title: PropTypes.string,
      text: PropTypes.string,
      linkBtn: PropTypes.string,
      nameBtn: PropTypes.string,
    })
  })
}