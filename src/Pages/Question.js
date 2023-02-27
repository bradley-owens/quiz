import styles from "./Question.module.css";
import { useParams } from "react-router-dom";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import { useSelector } from "react-redux";
import QuestionNavigator from "../Components/QuestionNavigator/QuestionNavigator";

const Question = () => {
  const params = useParams();
  const questionBank = useSelector((state) => state.quizState.questionBank);

  // shuffle function to mix up answers so the correct answer is not always the top one
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className={styles.container}>
      {questionBank.map((item) => {
        let questionNumber = questionBank.indexOf(item) + 1;

        if (params.questionId === item.id) {
          return (
            <QuestionBox
              key={item.id}
              questionNumber={questionNumber}
              question={item.question}
              options={shuffle([item.correctAnswer, ...item.incorrectAnswers])}
              correct={item.correctAnswer}
              id={item.id}
            />
          );
        }
      })}

      <QuestionNavigator />
    </div>
  );
};

export default Question;
