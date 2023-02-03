import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./QuestionList.module.css";

const QuestionList = () => {
  const questionBank = useSelector((state) => state.quizState.questionBank);
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  const questionsAttempted = useSelector(
    (state) => state.quizState.questionsAttempted
  );

  useEffect(() => {
    // This effect will be triggered every time questionsAttempted changes
  }, [questionsAttempted.length]);

  return (
    <div className={styles["navigator-container"]}>
      <div className={styles.gridContainer}>
        {questionBank.map((question, index) => {
          return (
            <Link
              to={
                questionsToAnswer.includes(question.id)
                  ? "#"
                  : `/${question.id}`
              }
            >
              <div
                key={Math.random()}
                className={
                  questionsToAnswer.includes(question.id)
                    ? styles.disabled
                    : styles.answered
                }
              >
                <p>{index + 1}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionList;
