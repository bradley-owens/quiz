import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <div className={styles.container}>
      <h1>Well Done you have completed the quiz!</h1>
      <div>
        <h2> Score</h2>
        <h3>
          {score}/{totalQuestions}
        </h3>
      </div>
    </div>
  );
};

export default ScoreBoard;
