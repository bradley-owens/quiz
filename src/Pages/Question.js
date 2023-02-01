import styles from "./Question.module.css";
import { useParams } from "react-router-dom";
import QuestionBox from "./QuestionBox";
import { useSelector } from "react-redux";
import ScoreBoard from "../Components/ScoreBoard";
import QuestionNavigator from "../Components/QuestionNavigator";

const Question = (props) => {
  const params = useParams();
  const questionBank = useSelector((state) => state.quizState.questionBank);
  const score = useSelector((state) => state.quizState.score);

  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  const questionsAttempted = useSelector(
    (state) => state.quizState.questionsAttempted
  );
  console.log(questionsToAnswer);
  console.log(questionsAttempted);
  return (
    <div>
      {questionsToAnswer.length === 0 ? (
        <ScoreBoard score={score} totalQuestions={questionBank.length} />
      ) : (
        questionBank.map((item) => {
          let questionNumber = questionBank.indexOf(item) + 1;

          if (params.questionId === item.id) {
            return (
              <QuestionBox
                key={item.id}
                questionNumber={questionNumber}
                question={item.question}
                options={[item.correctAnswer, ...item.incorrectAnswers]}
                correct={item.correctAnswer}
                id={item.id}
              />
            );
          }
        })
      )}

      <QuestionNavigator />
    </div>
  );
};

export default Question;
