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
  questions: QuestionsInterface[];
  isDone: boolean;
  questionIndex: number;
  answer: string;
}

export interface AnswerInterface {
  index: number;
  answer: string;
}

export interface MessageInterface {
  score: number;
}
