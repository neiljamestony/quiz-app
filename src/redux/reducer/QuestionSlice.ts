import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  QuestionState,
  AnswerInterface,
  shuffle_answer,
  QuestionsInterface,
  shuffle_questions,
} from "../../interface/redux";

const initialState: QuestionState = {
  score: 0,
  isDone: false,
  questionIndex: 0,
  answer: "",
  optionArr: shuffle_answer([
    "Neil Gaiman",
    "Stephen King",
    "H. P. Lovecraft",
    "Douglas Adams",
  ]),
  questions: [],
};

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    validateScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    validateRound: (state, action: PayloadAction<AnswerInterface>) => {
      state.questions[action.payload.index].status = "done";
      if (
        state.questions[action.payload.index].answer === action.payload.answer
      ) {
        state.score = state.score + 1;
        state.questions[action.payload.index].isCorrect = true;
      }
      state.answer = "";
    },
    isRoundDone: (state, action: PayloadAction<boolean>) => {
      state.isDone = action.payload;
    },
    generateQuestion: (state, action: PayloadAction<number>) => {
      state.questionIndex = action.payload;
    },
    getAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
    getCurrentOptions: (state, action: PayloadAction<string[]>) => {
      if (!action.payload.length) {
        state.optionArr = shuffle_answer([
          "Neil Gaiman",
          "Stephen King",
          "H. P. Lovecraft",
          "Douglas Adams",
        ]);
      } else {
        state.optionArr = shuffle_answer(action.payload);
      }
    },
    getQuestions: (state, action: PayloadAction<QuestionsInterface[]>) => {
      console.log(shuffle_questions(action.payload));
      state.questions = shuffle_questions(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const {
  validateScore,
  validateRound,
  isRoundDone,
  generateQuestion,
  getAnswer,
  getCurrentOptions,
  getQuestions,
} = questionSlice.actions;

export default questionSlice.reducer;
