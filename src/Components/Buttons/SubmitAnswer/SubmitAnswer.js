import styles from "./SubmitAnswer.module.css";

const SubmitAnswerButton = ({ selectedAnswer, submitAnswer }) => {
  return (
    <button
      className={styles["submit-answer"]}
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
  );
};

export default SubmitAnswerButton;
