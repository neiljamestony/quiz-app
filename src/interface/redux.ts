import { SetStateAction } from "react";
export interface QuestionsInterface {
  question: string;
  answer: string;
  options: string[];
  status: "done" | "pending";
  isCorrect: boolean;
}

export interface QuestionState {
  score: number;
  questions: QuestionsInterface[] | [];
  isDone: boolean;
  questionIndex: number;
  answer: string;
  optionArr: string[];
}

export interface AnswerInterface {
  index: number;
  answer: string;
}

export interface MessageInterface {
  score: number;
}

type stringArr = string[] | [];

type questionArray = QuestionsInterface[];

export const shuffle_questions = (array: questionArray) => {
  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};

export const shuffle_answer = (array: stringArr) => {
  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};
export interface CategoryItemInterface {
  title: string;
  questions: QuestionsInterface[];
}

export interface CategoryInterface {
  category: string;
  questions: QuestionsInterface[];
}
