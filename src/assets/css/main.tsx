import styled from "styled-components";

export const DashboardCard = styled.div({
  height: "500px",
  width: "500px",
  display: "block",
  alignContent: "center",
  justifyContent: "center",
  boxShadow: "4px 4px 20px 0px #0000003d",
  borderRadius: 8,
  padding: 2,
  backgroundColor: "#fff",
  color: "#7882A4",
  position: "relative",
  fontFamily: "Poppins",
});

export const QuestionContainer = styled.div({
  minHeight: 150,
  lineBreak: "normal",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const OptionsContainer = styled.div({
  height: 230,
  padding: 5,
});

export const OptionAnswer = styled.div({
  height: 37.5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  border: "1px solid gray",
  margin: 10,
  cursor: "pointer",
});

export const NextButton = styled.button({
  marginTop: 10,
  width: "50%",
  backgroundColor: "#4287f5",
  cursor: "pointer",
  color: "#fff",
  "&:disabled": {
    backgroundColor: "#d5d8de",
    color: "black",
    cursor: "not-allowed",
  },
});

export const RoundContainer = styled.div({
  width: "485px",
  padding: 10,
  marginBottom: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
});

export const RoundItem = styled.div({
  height: 40,
  width: 40,
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  border: "0.5px solid #949292",
});

export const MessageContainer = styled.div({
  display: "block",
  justifyContent: "center",
  alignContent: "center",
  marginTop: 100,
});

export const MessageBox = styled.div({
  fontSize: 30,
});
