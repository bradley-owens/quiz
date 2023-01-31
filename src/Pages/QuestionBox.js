import { useState } from "react";
import { Link } from "react-router-dom";

const QuestionBox = ({
  question,
  id,
  options,
  correct,
  identityNumber,
  moveToNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("unanswered");
  const [correctState, setCorrectState] = useState();

  const chooseAnswer = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const submitAnswer = () => {
    if (selectedAnswer === correct) {
      setCorrectState(true);
    } else {
      setCorrectState(false);
    }
  };

  const resetCorrectState = () => {
    setCorrectState("unanswered");
  };

  const renderCorrectState = () => {
    if (correctState === true) {
      return <h1> Correct </h1>;
    } else if (correctState === "unanswered") {
      return null;
    } else if (correctState === false) {
      return <h1>Incorrect</h1>;
    }
  };

  return (
    <div>
      <h1>{question}</h1>
      {options.map((answer) => {
        return (
          <div>
            <input type="checkbox" value={answer} onChange={chooseAnswer} />
            <label> {answer}</label>
            <br />
          </div>
        );
      })}

      <h4>{correct}</h4>

      <button
        onClick={() => {
          moveToNextQuestion();
          submitAnswer();
        }}
      >
        submit
      </button>

      {renderCorrectState()}
      <button onclick={resetCorrectState}>
        <Link to={`/${identityNumber[0]}`}>Next</Link>
      </button>
    </div>
  );
};

export default QuestionBox;
