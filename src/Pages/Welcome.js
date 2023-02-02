import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Welcome.module.css";

const Welcome = ({ dataLoaded }) => {
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button className={dataLoaded ? styles.ready : styles.disabled}>
        <Link to={`/${questionsToAnswer[0]}`}>Start</Link>
      </button>
    </div>
  );
};

export default Welcome;
