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
    <div>
      {questionBank.map((question, index) => {
        return (
          <div
            key={Math.random()}
            className={
              questionsToAnswer.includes(question.id)
                ? styles.disabled
                : styles.answered
            }
          >
            <Link
              to={
                questionsToAnswer.includes(question.id)
                  ? "#"
                  : `/${question.id}`
              }
            >
              <p>{index + 1}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionList;
