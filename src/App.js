import { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Question from "./Pages/Question";
import QuestionBox from "./Pages/QuestionBox";

function App() {
  const [quizData, setQuizData] = useState();
  const [questionIdNumber, setQuestionIdNumber] = useState([]);

  let IdArray = [];
  const fetchQuizData = async () => {
    const response = await fetch("https://the-trivia-api.com/api/questions ");
    const data = await response.json();
    data.map(({ id }) => {
      IdArray.push(id);
    });
    setQuestionIdNumber(IdArray);
    setQuizData(data);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const moveToNextQuestion = () => {
    setQuestionIdNumber(questionIdNumber.slice(1, questionIdNumber.length));
  };

  console.log(questionIdNumber);
  return (
    <Routes>
      <Route
        path="/"
        element={<Welcome identityNumbers={questionIdNumber} />}
      />
      <Route
        path="/:questionId"
        element={
          <Question
            data={quizData}
            moveToNextQuestion={moveToNextQuestion}
            identityNumbers={questionIdNumber}
          />
        }
      />
    </Routes>
  );
}

export default App;
