const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>Well Done you have completed the quiz</h1>
      <h2> Score</h2>
      <h1>
        {score}/{totalQuestions}
      </h1>
    </div>
  );
};

export default ScoreBoard;
