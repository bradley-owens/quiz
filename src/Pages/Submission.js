import { useSelector } from "react-redux";
import ScoreBoard from "../Components/ScoreBoard";
import { Link } from "react-router-dom";

const Submission = () => {
  const score = useSelector((state) => state.quizState.score);
  const questionBank = useSelector((state) => state.quizState.questionBank);
  return (
    <div>
      <ScoreBoard score={score} totalQuestions={questionBank.length} />
      <button>
        <Link to="/">Go back to Start</Link>
      </button>
    </div>
  );
};

export default Submission;
