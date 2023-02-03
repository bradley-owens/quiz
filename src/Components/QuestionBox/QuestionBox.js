import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../Store/quiz-slice";
import styles from "./QuestionBox.module.css";
import NextQuestionButton from "../Buttons/NextQuestion/NextQuestion";
import SubmitAnswerButton from "../Buttons/SubmitAnswer/SubmitAnswer";

const QuestionBox = ({ question, id, options, correct, questionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("unanswered");
  const [submittedAnswer, setSubmittedAnswer] = useState(false);

  //redux
  const dispatch = useDispatch();
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  const questionSubmitted = useSelector(
    (state) => state.quizState.questionSubmitted
  );

  // keeps track of change of answer before submitting
  const chooseAnswer = (e) => {
    e.stopPropagation();
    setSelectedAnswer(e.target.value);
  };

  // submits answer which then is seen if correct or incorrect and redux slice uses the id
  // and result to see if user has already answered the question for first time and comparing
  // to the old answer if not and will deduct if gone from correct to wrong and will add if previous
  // answer was wrong and selected correct answer

  //it will also dispatch the moveToNextQuestion method which will remove that question from
  //the questions to answer array and add it to the questions attempted array
  const submitAnswer = () => {
    setSubmittedAnswer(true);
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

  // this will reset the unanswered state so the user cannot move to the next question

  const resetCorrectState = () => {
    dispatch(quizActions.resetAnswer("unanswered"));
  };

  return (
    <div className={styles["question-box"]}>
      <h1>{`Question ${questionNumber}`}</h1>

      <h2>{question}</h2>
      <div className={styles.option}>
        {options.map((answer) => {
          return (
            <div className={styles.option} key={Math.random()}>
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
      </div>

      <div className={styles["button-container"]}>
        <SubmitAnswerButton
          selectedAnswer={selectedAnswer}
          submitAnswer={submitAnswer}
        />
        <NextQuestionButton
          questionSubmitted={questionSubmitted}
          resetCorrectState={resetCorrectState}
          questionsToAnswer={questionsToAnswer}
          submittedAnswer={submittedAnswer}
        />
      </div>
    </div>
  );
};

export default QuestionBox;
