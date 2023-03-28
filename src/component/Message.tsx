import React from "react";
import Great from "../assets/img/best-seller.png";
import GoodJob from "../assets/img/like.png";
import { MessageInterface } from "../interface/redux";
import {
  MessageContainer,
  MessageBox,
  TakeAnotherQuiz,
  MessageSubContainer,
} from "../assets/css/main";
import { useAppDispatch } from "../redux/store";
import { resetRound } from "../redux/reducer/QuestionSlice";

const Message: React.FC<MessageInterface> = ({ score }) => {
  const dispatch = useAppDispatch();
  const onTakeAnotherQuiz = () => dispatch(resetRound([]));
  return (
    <MessageContainer>
      <MessageSubContainer>
        <MessageBox>
          Your score is {score},{" "}
          <span style={{ color: "#33de61" }}>
            {score <= 5 ? "Better luck next time!" : "You did a Great job!"}
          </span>
        </MessageBox>
        <img
          src={score <= 5 ? GoodJob : Great}
          alt="good-job"
          height={170}
          style={{ marginTop: 20 }}
        />
      </MessageSubContainer>
      <TakeAnotherQuiz onClick={onTakeAnotherQuiz}>
        Take another quiz
      </TakeAnotherQuiz>
    </MessageContainer>
  );
};

export default Message;
