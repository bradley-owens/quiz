import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  questionBank: [],
  questionsToAnswer: [],
  questionsAttempted: [],
  score: 0,
  quizQuestionsResult: [],
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
      const questionResult = action.payload.result;
      const questionId = action.payload.id;

      let result = { id: questionId, result: questionResult };

      const questionIndex = state.quizQuestionsResult.findIndex(
        (question) => question.id === questionId
      );

      if (questionIndex === -1) {
        // the question has not been answered before
        state.quizQuestionsResult = [...state.quizQuestionsResult, result];
        if (questionResult === "correct") {
          state.score++;
        } else return;
      } else {
        // the question has been answered before
        const previousResult = state.quizQuestionsResult[questionIndex].result;
        if (previousResult === "incorrect" && questionResult === "correct") {
          // the user has changed their answer from incorrect to correct
          state.quizQuestionsResult[questionIndex].result = questionResult;
          state.score++;
        } else if (
          previousResult === "correct" &&
          questionResult === "incorrect"
        ) {
          // the user has changed their answer from correct to incorrect
          state.quizQuestionsResult[questionIndex].result = questionResult;
          state.score--;
        } else if (
          previousResult === "correct" &&
          questionResult === "correct"
        ) {
          // the user has changed their answer from correct to correct
          state.quizQuestionsResult[questionIndex].result = questionResult;
        } else {
          state.quizQuestionsResult[questionIndex].result = questionResult;
        }
      }

      state.questionSubmitted = true;
    },

    resetAnswer(state) {
      state.questionResult = "unanswered";
      state.questionSubmitted = false;
    },

    moveToNextQuestion(state) {
      // state.questionsAttempted = [
      //   ...state.questionsAttempted,
      //   state.questionsToAnswer.shift(),
      // ];

      if (state.questionsToAnswer.length === 0) {
        return;
      }

      state.questionsAttempted = [
        ...state.questionsAttempted,
        state.questionsToAnswer.shift(),
      ];
      state.questionNumber = state.questionNumber + 1;
    },
  },
});

export const quizActions = quizStateSlice.actions;
export default quizStateSlice.reducer;
