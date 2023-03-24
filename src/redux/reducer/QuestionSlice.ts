import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionState, AnswerInterface } from "../../interface/redux";

const initialState: QuestionState = {
  score: 0,
  isDone: false,
  questionIndex: 0,
  answer: "",
  questions: [
    {
      question: `Which author wrote 'Coraline'?`,
      answer: "Neil Gaiman",
      options: [
        "Neil Gaiman",
        "Stephen King",
        "H. P. Lovecraft",
        "Douglas Adams",
      ],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `What is the nickname of the English football team Preston North End?`,
      answer: "The Lilywhites",
      options: ["The Lilywhites", "The Blades", "The Blues", "Douglas Adams"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which pasta's name means 'to hollow'?`,
      answer: "Cavatelli",
      options: ["Rotelle", "Cavatelli", "Vermicelli", "Pappardelle"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which president signed the Civil Rights Act of 1964??`,
      answer: "Lyndon B. Johnson",
      options: [
        "John F. Kennedy",
        "Lyndon B. Johnson",
        "Richard Nixon",
        "Jimmy Carter",
      ],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which of these countries borders Andorra?`,
      answer: "France",
      options: ["France", "Monaco", "Switzerland", "Luxembourg"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which of these brands has a eagle on its logo?`,
      answer: "Giorgio Armani",
      options: ["Giorgio Armani", "Lacoste", "Tripadvisor", "Bacardi"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which US state is divided into two parts by a large lake?`,
      answer: "Michigan",
      options: ["Michigan", "Ohio", "Minnesota", "Wisconsin"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `What pastry is used to make profittaroles?`,
      answer: "Choux",
      options: ["Filo", "Puff", "Choux", "Flaky"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `What is Felinology the study of?`,
      answer: "cats",
      options: ["oceans", "cats", "the lymph system and glands", "angels"],
      status: "pending",
      isCorrect: false,
    },
    {
      question: `Which of these brands has a bull on its logo?`,
      answer: "Lamborghini",
      options: ["Lamborghini", "Linux", "Hermès", "Tripadvisor"],
      status: "pending",
      isCorrect: false,
    },
  ],
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
  },
  extraReducers: (builder) => {},
});

export const {
  validateScore,
  validateRound,
  isRoundDone,
  generateQuestion,
  getAnswer,
} = questionSlice.actions;

export default questionSlice.reducer;
