import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Welcome.module.css";

const Welcome = ({ dataLoaded }) => {
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  return (
    <div className={styles.container}>
      <h1>Welcome </h1>
      <div className={styles["rules-container"]}>
        <h2>Rules of the game</h2>
        <ul>
          <li> Each Question must be attempted to finish the quiz</li>
          <li>You may navigate through questions you have already submitted</li>
          <li>Have fun! I hope you studied up on general knowledge!</li>
        </ul>
      </div>
      <Link to={`/${questionsToAnswer[0]}`}>
        <button className={dataLoaded ? styles.ready : styles.disabled}>
          Start
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
