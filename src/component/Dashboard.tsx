import { DashboardCard } from "../assets/css/main";
import { useAppSelector } from "../redux/store";
import Question from "./Question";
import Round from "./Round";
import Message from "./Message";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { score, isDone, questions } = useAppSelector(
    (state) => state.questionState
  );
  const uname = localStorage.getItem("uname") || [];
  const navigate = useNavigate();

  useEffect(() => {
    if (!uname.length) return navigate("/createAccount");
  }, [uname]);

  return (
    <>
      <Round />
      <DashboardCard>
        {isDone ? <Message score={score} /> : <Question />}
      </DashboardCard>
    </>
  );
}
