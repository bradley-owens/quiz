import { configureStore } from "@reduxjs/toolkit";
import quizStateReducer from "./quiz-slice";

const store = configureStore({
  reducer: {
    quizState: quizStateReducer,
  },
});

export default store;
