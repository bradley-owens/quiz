import { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Question from "./Pages/Question";
import { useDispatch } from "react-redux";
import { quizActions } from "./Store/quiz-slice";
import Submission from "./Pages/Submission";

function App() {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);

  let IdArray = [];
  const fetchQuizData = async () => {
    const response = await fetch("https://the-trivia-api.com/api/questions ");
    const data = await response.json();
    data.map(({ id }) => {
      IdArray.push(id);
    });
    dispatch(quizActions.setQuestionsToAnswer(IdArray));
    dispatch(quizActions.setQuestionBank(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome dataLoaded={dataLoaded} />} />
      <Route path="/:questionId" element={<Question />} />
      <Route path="/submission" element={<Submission />} />
    </Routes>
  );
}

export default App;
