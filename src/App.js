import { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Question from "./Pages/Question";
import { useDispatch } from "react-redux";
import { quizActions } from "./Store/quiz-slice";

function App() {
  const dispatch = useDispatch();

  let IdArray = [];
  const fetchQuizData = async () => {
    const response = await fetch("https://the-trivia-api.com/api/questions ");
    const data = await response.json();
    data.map(({ id }) => {
      IdArray.push(id);
    });
    dispatch(quizActions.setQuestionsToAnswer(IdArray));
    dispatch(quizActions.setQuestionBank(data));
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/:questionId" element={<Question />} />
    </Routes>
  );
}

export default App;
