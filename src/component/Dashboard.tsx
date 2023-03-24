import { DashboardCard } from "../assets/css/main";
import { useAppSelector } from "../redux/store";
import Question from "./Question";
import Round from "./Round";
import Message from "./Message";

export default function Dashboard() {
  const { score, isDone } = useAppSelector((state) => state.questionState);
  return (
    <>
      <Round />
      <DashboardCard>
        {isDone ? <Message score={score} /> : <Question />}
      </DashboardCard>
    </>
  );
}
