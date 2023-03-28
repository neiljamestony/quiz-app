import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  QuestionState,
  AnswerInterface,
  shuffle_answer,
  QuestionsInterface,
  shuffle_questions,
  GetQuestionInterface,
} from "../../interface/redux";
import { categories } from "../../component/questions/question";

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
  category: "",
  categories: categories,
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
    getQuestions: (state, action: PayloadAction<GetQuestionInterface>) => {
      state.questions = shuffle_questions(action.payload.questions);
      state.category = action.payload.category;
    },
    resetRound: (state, action: PayloadAction<[]>) => {
      const newCategories = state.categories.map((category) => {
        if (category.category === state.category) {
          category.passed = state.score < 5 ? false : true;
        }
        return category;
      });
      state.questions = action.payload;
      state.isDone = false;
      state.questionIndex = 0;
      state.answer = "";
      state.categories = newCategories;
      state.category = "";
      state.score = 0;
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
  resetRound,
} = questionSlice.actions;

export default questionSlice.reducer;
