import React from "react";
import Great from "../assets/img/best-seller.png";
import GoodJob from "../assets/img/like.png";
import { MessageInterface } from "../interface/redux";
import { MessageContainer, MessageBox } from "../assets/css/main";

const Message: React.FC<MessageInterface> = ({ score }) => {
  return (
    <MessageContainer>
      <MessageBox>
        Your score is {score},{" "}
        <span style={{ color: "#33de61" }}>
          {score <= 5 ? "Better luck next time!" : "You did a Great job!"}
        </span>
      </MessageBox>
      <img
        src={score <= 5 ? GoodJob : Great}
        alt="good-job"
        height={200}
        style={{ marginTop: 20 }}
      />
    </MessageContainer>
  );
};

export default Message;
