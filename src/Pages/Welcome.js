import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button>
        <Link to={`/${props.identityNumbers[0]}`}>Start</Link>
      </button>
    </div>
  );
};

export default Welcome;
