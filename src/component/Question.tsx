import { useAppSelector } from "../redux/store";
import { useEffect } from "react";
import {
  validateRound,
  isRoundDone,
  generateQuestion,
  getAnswer,
  getCurrentOptions,
  updateTimer,
} from "../redux/reducer/QuestionSlice";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import {
  QuestionContainer,
  OptionAnswer,
  OptionsContainer,
  NextButton,
} from "../assets/css/main";
import Timer from "./Timer";

const Question = () => {
  const { questions, questionIndex, answer, optionArr, timer } = useAppSelector(
    (state) => state.questionState
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let bool: boolean = !questions.length;
    if (!bool) {
      dispatch(getCurrentOptions(questions[questionIndex].options));
    } else {
      navigate("/category");
    }
  }, [questions.length]);

  const validate_round = (index: number): void => {
    dispatch(validateRound({ answer: answer, index: index }));
    dispatch(generateQuestion(index + 1));
    if (questions.length === index + 1) {
      dispatch(isRoundDone(true));
      dispatch(getCurrentOptions([]));
    } else {
      dispatch(getCurrentOptions(questions[index + 1].options));
    }
  };

  useEffect(() => {
    if (timer < 0) {
      dispatch(validateRound({ answer: "", index: questionIndex }));
      dispatch(generateQuestion(questionIndex + 1));
      if (questions.length === questionIndex + 1) {
        dispatch(isRoundDone(true));
        dispatch(getCurrentOptions([]));
      } else {
        dispatch(getCurrentOptions(questions[questionIndex + 1].options));
      }
      dispatch(updateTimer(10));
    }
  }, [timer]);

  return (
    <div>
      <Timer />
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
