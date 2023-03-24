import { useAppSelector } from "../redux/store";
import {
  validateRound,
  isRoundDone,
  generateQuestion,
  getAnswer,
} from "../redux/reducer/QuestionSlice";
import { useAppDispatch } from "../redux/store";
import {
  QuestionContainer,
  OptionAnswer,
  OptionsContainer,
  NextButton,
} from "../assets/css/main";

const Question = () => {
  const { questions, questionIndex, answer } = useAppSelector(
    (state) => state.questionState
  );
  const dispatch = useAppDispatch();

  const validate_round = (index: number) => {
    if (questions.length === questionIndex + 1) {
      dispatch(isRoundDone(true));
      dispatch(generateQuestion(index + 1));
      dispatch(validateRound({ answer: answer, index: index }));
    } else {
      dispatch(generateQuestion(index + 1));
      dispatch(validateRound({ answer: answer, index: index }));
    }
  };

  return (
    <div>
      <QuestionContainer>{questions[questionIndex].question}</QuestionContainer>
      <OptionsContainer>
        {questions[questionIndex].options?.map((option, key) => {
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
