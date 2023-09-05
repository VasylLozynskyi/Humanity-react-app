import { SocialLinks } from "Components/components/SocialLinksSection/SocialsLinks";
import { companySocialIcons } from "data/companyInfo";
import PropTypes from "prop-types";
import { ElementContactUsBlock } from "./ElementContactUsBlock";
import "./scss/contactuscontentsection.scss";

export const ContactUsContentSection = ({ data, pathFn }) => {
  return (
    <>
      <section className="contactuscontent">
        <div className="subtitle">{data.subtitle}</div>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        <div className="contact-btns-flex-block">
          {data.contacts.map((el) => (
            <ElementContactUsBlock
              key={el.key}
              data={el}
              pathFn={(value) => pathFn(value)}
            />
          ))}
        </div>
        <SocialLinks data={companySocialIcons} />
      </section>
    </>
  );
};

ContactUsContentSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    contacts: PropTypes.array,
  }),
  pathFn: PropTypes.func,
};
