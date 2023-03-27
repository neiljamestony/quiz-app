import { useAppSelector } from "../redux/store";
import { useEffect } from "react";
import {
  validateRound,
  isRoundDone,
  generateQuestion,
  getAnswer,
  getCurrentOptions,
  getQuestions,
} from "../redux/reducer/QuestionSlice";
import { useAppDispatch } from "../redux/store";
import { questionsArr } from "./questions/question";
import {
  QuestionContainer,
  OptionAnswer,
  OptionsContainer,
  NextButton,
} from "../assets/css/main";

const Question = () => {
  const { questions, questionIndex, answer, optionArr } = useAppSelector(
    (state) => state.questionState
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    let bool: boolean = !questions.length;
    bool && dispatch(getQuestions(questionsArr));
  }, [questions.length]);

  useEffect(() => {
    let bool: boolean = !questions.length;
    !bool && dispatch(getCurrentOptions(questions[questionIndex].options));
  }, [questions.length]);

  const validate_round = (index: number) => {
    if (questions.length === index + 1) {
      dispatch(isRoundDone(true));
      dispatch(generateQuestion(index + 1));
      dispatch(validateRound({ answer: answer, index: index }));
      dispatch(getCurrentOptions([]));
    } else {
      dispatch(getCurrentOptions(questions[index + 1].options));
      dispatch(generateQuestion(index + 1));
      dispatch(validateRound({ answer: answer, index: index }));
    }
  };

  return (
    <div>
      <QuestionContainer>
        {questions.length && questions[questionIndex].question}
      </QuestionContainer>
      <OptionsContainer>
        {optionArr?.map((option, key) => {
          return (
            <OptionAnswer
              key={key}
              style={{
                backgroundColor: option === answer ? "#4287f5" : "#fff",
                color: option == answer ? "#fff" : "#7882A4",
              }}
              onClick={() => dispatch(getAnswer(option))}
            >
              {option}
            </OptionAnswer>
          );
        })}
      </OptionsContainer>
      <NextButton
        onClick={() => validate_round(questionIndex)}
        disabled={answer === ""}
      >
        {questions.length === questionIndex + 1 ? "Done" : "Next"}
      </NextButton>
    </div>
  );
};

export default Question;
