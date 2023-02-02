import styles from "./Question.module.css";
import { useParams } from "react-router-dom";
import QuestionBox from "../Components/QuestionBox";
import { useSelector } from "react-redux";
import QuestionNavigator from "../Components/QuestionNavigator";

const Question = () => {
  const params = useParams();
  const questionBank = useSelector((state) => state.quizState.questionBank);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <div>
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
