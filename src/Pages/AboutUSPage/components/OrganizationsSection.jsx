import Carousel from "react-multi-carousel";
import { ItemSlider } from "./ItemSlider";
import 'react-multi-carousel/lib/styles.css';
import "./scss/organizationssection.scss"

export const OrganizationsSection = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1239, min: 666 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 665, min: 307 },
      items: 1,
      minwidth: "307px",
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((el) => (
          <ItemSlider
            key={el.key}
            data={el}
          ></ItemSlider>
        ))}
       </Carousel>
    </div>
  );
};
