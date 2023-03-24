import { useAppSelector } from "../redux/store";
import { RoundContainer, RoundItem } from "../assets/css/main";
export default function Round() {
  const { questions } = useAppSelector((state) => state.questionState);
  return (
    <RoundContainer>
      {questions?.map((question, key) => {
        return (
          <RoundItem
            key={key}
            style={{
              backgroundColor:
                question.status === "done"
                  ? question.isCorrect
                    ? "#33de61"
                    : "#db4b1a"
                  : "#f0f0f0",
              color: question.status === "done" ? "#fff" : "black",
            }}
          >
            {key + 1}
          </RoundItem>
        );
      })}
    </RoundContainer>
  );
}
