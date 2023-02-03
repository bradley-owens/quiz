import styles from "./NextQuestion.module.css";
import { Link } from "react-router-dom";

const NextQuestionButton = ({
  questionSubmitted,
  resetCorrectState,
  submittedAnswer,
  questionsToAnswer,
}) => {
  return (
    <Link
      onClick={() => {
        if (questionSubmitted) {
          resetCorrectState();
        } else return;
      }}
      to={
        submittedAnswer === false
          ? "#"
          : questionsToAnswer.length === 0
          ? "/submission"
          : `/${questionsToAnswer[0]}`
      }
    >
      <button
        className={
          submittedAnswer === false ? styles.disabled : styles["next-question"]
        }
      >
        {questionsToAnswer.length === 0 ? "Finish Test " : "Next"}
      </button>
    </Link>
  );
};

export default NextQuestionButton;
