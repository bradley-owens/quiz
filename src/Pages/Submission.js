import { useSelector } from "react-redux";
import ScoreBoard from "../Components/ScoreBoard/ScoreBoard";
import { Link } from "react-router-dom";
import styles from "./Submission.module.css";

const Submission = () => {
  const score = useSelector((state) => state.quizState.score);
  const questionBank = useSelector((state) => state.quizState.questionBank);

  // reload page to re-fetch the api data to begin new quiz
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className={styles["submission-container"]}>
      <ScoreBoard score={score} totalQuestions={questionBank.length} />
      <button onClick={handleClick}>
        <Link to="/">Go back to Start</Link>
      </button>
    </div>
  );
};

export default Submission;
