import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./QuestionNavigator.module.css";

const QuestionNavigator = () => {
  const questionBank = useSelector((state) => state.quizState.questionBank);
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  const [permitted, setPermitted] = useState(false);
  // console.log(questionsToAnswer);

  return (
    <div>
      {questionBank.map((item) => {
        let index = questionBank.indexOf(item);

        const answered = questionsToAnswer.map((question) => {
          // console.log(item.id, question);
          if (question === item.id) {
            return false;
          }
        });

        // console.log(answered);
        return (
          <div
            className={permitted ? styles.answered : styles.disabled}
            key={item.id}
          >
            <Link to={permitted ? `/${item.id}` : "#"}>
              <p>{index + 1}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionNavigator;
