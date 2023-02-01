import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Welcome = () => {
  const questionsToAnswer = useSelector(
    (state) => state.quizState.questionsToAnswer
  );
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button>
        <Link to={`/${questionsToAnswer[0]}`}>Start</Link>
      </button>
    </div>
  );
};

export default Welcome;
