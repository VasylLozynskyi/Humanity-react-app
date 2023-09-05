import { useState } from "react";
import { ElementBlock } from "../ElementBlock";

export const ElementBlockContainer = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showArrowAnswerBtn, setShowArrowAnswerBtn] = useState("˃");
  const [toggleBg, setToggleBg] = useState(true);

  const HandleshowAnswer = () => {
    setShowAnswer(!showAnswer);
    if (showArrowAnswerBtn === "˃") {
      setShowArrowAnswerBtn("˅");
      setToggleBg(!toggleBg);
    } else {
      setShowArrowAnswerBtn("˃");
      setToggleBg(!toggleBg);
    }
  };

  return (
    <ElementBlock
      answer={data.answer}
      question={data.question}
      showAnswer={showAnswer}
      showArrowAnswerBtn={showArrowAnswerBtn}
      toggleBg={toggleBg}
      HandleshowAnswer={HandleshowAnswer}
    />
  );
};
