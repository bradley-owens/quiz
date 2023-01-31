import styles from "./Question.module.css";
import { Link, useParams } from "react-router-dom";
import QuestionBox from "./QuestionBox";

const Question = (props) => {
  const params = useParams();

  return (
    <div>
      <h1>Question 1</h1>

      {props.data.map(({ question, correctAnswer, incorrectAnswers, id }) => {
        if (params.questionId === id) {
          return (
            <QuestionBox
              question={question}
              options={[correctAnswer, ...incorrectAnswers]}
              correct={correctAnswer}
              id={id}
              moveToNextQuestion={props.moveToNextQuestion}
              identityNumber={props.identityNumbers}
            />
          );
        }
      })}
    </div>
  );
};

export default Question;
