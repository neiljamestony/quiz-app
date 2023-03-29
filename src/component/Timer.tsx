import { useEffect } from "react";
import { LinearTimerContainer, LinearTimerBar } from "../assets/css/main";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { updateTimer } from "../redux/reducer/QuestionSlice";

const LinearTimer = () => {
  const dispatch = useAppDispatch();
  const { timer } = useAppSelector((state) => state.questionState);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch(updateTimer(timer - 1));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  const progress = (timer * 100) / 5;

  return (
    <LinearTimerContainer>
      <LinearTimerBar style={{ width: `${progress}%` }}></LinearTimerBar>
    </LinearTimerContainer>
  );
};

export default LinearTimer;
