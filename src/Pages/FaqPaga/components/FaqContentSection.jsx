import PropTypes from "prop-types"
import { companyConsaltEmail } from "data/companyInfo";
import { ElementBlockContainer } from "./containers/ElementBlockContainer";
import "./scss/faqcontentsection.scss";

export const FaqContentSection = ({ data }) => {
  const styleBgBlock = { backgroundImage: `url(${data.asidemail.urlBgImage})` };
  return (
      <div className="flex-block">
        <aside className="mail-Question" style={styleBgBlock}>
          <h1>{data.asidemail.title}</h1>
          <h4>{data.asidemail.subtitle}</h4>
          <a href={`mailto:${companyConsaltEmail}`}>
            <button>{data.asidemail.nameBtn}</button>
          </a>
        </aside>
        <section className="faq-answers">
          <div>
            {data.contentpart1.map((el) => (
              <ElementBlockContainer key={el.key} data={el} />
            ))}
          </div>
          <div>
            {data.contentpart2.map((el) => (
              <ElementBlockContainer key={el.key} data={el} />
            ))}
          </div>
        </section>
      </div>
  );
};

FaqContentSection.propTypes = {
  data: PropTypes.shape({
    asidemail: PropTypes.shape({
      urlBgImage: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      nameBtn: PropTypes.string,
    }),
    contentpart1: PropTypes.array,
    contentpart2: PropTypes.array,
  }),
}