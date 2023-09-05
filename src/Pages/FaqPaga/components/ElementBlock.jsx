import "./scss/elementblock.scss";
import PropTypes from "prop-types";

export const ElementBlock = ({
  answer,
  question,
  showAnswer,
  showArrowAnswerBtn,
  toggleBg,
  HandleshowAnswer,
}) => {
  return (
    <section className="faq_block">
      <div className="_flex">
        <h4 onClick={() => HandleshowAnswer()}>{question}</h4>
        <button
          className={!toggleBg ? "toggleBg" : ""}
          onClick={() => HandleshowAnswer()}
        >
          {showArrowAnswerBtn}
        </button>
      </div>
      {showAnswer && <p className="faq_answer">{answer}</p>}
      <hr />
    </section>
  );
};

ElementBlock.propTypes = {
  showAnswer: PropTypes.bool,
  toggleBg: PropTypes.bool,
  showArrowAnswerBtn: PropTypes.string,
  HandleshowAnswe: PropTypes.func,
  question: PropTypes.string,
  answer: PropTypes.string,
};
