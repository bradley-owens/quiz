import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../Store/quiz-slice";
import styles from "./QuestionBox.module.css";

const QuestionBox = ({ question, id, options, correct, questionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("unanswered");
  //redux
  const dispatch = useDispatch();
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  const questionSubmitted = useSelector(
    (state) => state.quizState.questionSubmitted
  );

  const chooseAnswer = (e) => {
    e.stopPropagation();
    setSelectedAnswer(e.target.value);
  };

  const submitAnswer = () => {
    if (selectedAnswer === correct) {
      dispatch(quizActions.tallyScore("correct"));
    } else if (selectedAnswer === "unanswered") {
      return;
    } else {
      dispatch(quizActions.tallyScore("incorrect"));
    }
  };

  const resetCorrectState = () => {
    dispatch(quizActions.resetAnswer("unanswered"));
  };

  return (
    <div>
      <h1>{`Question ${questionNumber}`}</h1>
      <h1>{question}</h1>
      {options.map((answer) => {
        return (
          <div key={Math.random()}>
            <input
              type="radio"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={chooseAnswer}
            />

            <label> {answer}</label>
            <br />
          </div>
        );
      })}

      <button
        onClick={() => {
          if (selectedAnswer === "unanswered") {
            return;
          } else {
            submitAnswer();
            dispatch(quizActions.moveToNextQuestion());
          }
        }}
      >
        submit
      </button>

      <button
        className={
          selectedAnswer === "unanswered"
            ? styles.disabled
            : styles["next-question"]
        }
      >
        <Link
          onClick={() => {
            if (questionSubmitted) {
              resetCorrectState();
            } else return;
          }}
          to={
            selectedAnswer === "unanswered" ? "#" : `/${questionsToAnswer[0]}`
          }
        >
          Next
        </Link>
      </button>
    </div>
  );
};

export default QuestionBox;
