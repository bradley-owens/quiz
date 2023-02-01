import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  questionBank: [],
  questionsToAnswer: [],
  questionsAttempted: [],
  score: 0,
  questionResult: "unanswered",
  questionSubmitted: false,
  questionNumber: 1,
};

const quizStateSlice = createSlice({
  name: "quizState",
  initialState: quizInitialState,
  reducers: {
    setQuestionBank(state, action) {
      state.questionBank = action.payload;
    },
    setQuestionsToAnswer(state, action) {
      state.questionsToAnswer = action.payload;
    },

    tallyScore(state, action) {
      const answer = action.payload;
      if (answer === "correct") {
        state.score++;
        state.questionResult = "correct";
        state.questionSubmitted = true;
      } else if (answer === "incorrect") {
        state.questionResult = "incorrect";
        state.questionSubmitted = true;
      } else if (answer === "unanswered") {
        state.questionResult = "unanswered";
        state.questionSubmitted = false;
      }
    },

    resetAnswer(state) {
      state.questionResult = "unanswered";
      state.questionSubmitted = false;
    },

    moveToNextQuestion(state) {
      state.questionsAttempted = [
        ...state.questionsAttempted,
        state.questionsToAnswer.shift(),
      ];

      // state.questionsToAnswer = state.questionsToAnswer.slice(
      //   1,
      //   state.questionsToAnswer.length
      // );
    },
  },
});

export const quizActions = quizStateSlice.actions;
export default quizStateSlice.reducer;
