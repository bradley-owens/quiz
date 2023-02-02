import { useState, useEffect } from "react";
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
  const score = useSelector((state) => state.quizState.score);

  const chooseAnswer = (e) => {
    e.stopPropagation();
    setSelectedAnswer(e.target.value);
  };

  const submitAnswer = () => {
    if (selectedAnswer === correct) {
      dispatch(
        quizActions.tallyScore({
          result: "correct",
          id: id,
        })
      );
    } else if (selectedAnswer === "unanswered") {
      return;
    } else {
      dispatch(
        quizActions.tallyScore({
          result: "incorrect",
          id: id,
        })
      );
    }
    dispatch(quizActions.moveToNextQuestion(id));
  };
  const resetCorrectState = () => {
    dispatch(quizActions.resetAnswer("unanswered"));
  };

  return (
    <div>
      <h1>{`Question ${questionNumber}`}</h1>
      <h2>{score}</h2>
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
          }
        }}
      >
        Submit Answer
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
            selectedAnswer === "unanswered"
              ? "#"
              : questionsToAnswer.length === 0
              ? "/submission"
              : `/${questionsToAnswer[0]}`
          }
        >
          {questionsToAnswer.length === 0 ? "Finish Test " : "Next"}
        </Link>
      </button>
    </div>
  );
};

export default QuestionBox;
