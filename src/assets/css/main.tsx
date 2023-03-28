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

export const CategoryCard = styled.div({
  height: "400px",
  width: "600px",
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

export const LoginCard = styled.div({
  height: "200px",
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
  paddingLeft: 10,
  alignItems: "center",
  textAlign: "left",
  gap: 10,
  margin: 10,
  cursor: "pointer",
  "&:hover": {
    border: "0.5px solid #fff",
    background: "#7eabf2 !important",
    color: "#fff !important",
  },
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

export const LoginTitle = styled.div({
  fontSize: 20,
});

export const InputField = styled.input({
  width: "100%",
  padding: 6,
  fontFamily: "Poppins",
  borderRadius: 5,
  border: "1px solid #7882A4",
  color: "#7882A4",
});

export const LoginButton = styled.button({
  height: 35,
  fontSize: 14,
  width: "50%",
  padding: 0,
  margin: 0,
  background: "#199ee0",
  color: "#fff",
});

export const LoginHeader = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 25,
});

export const LoginBody = styled.div({
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
});

export const CategoryHeader = styled.div({
  fontSize: 45,
  marginTop: 5,
  height: 50,
  color: "#7eabf2",
});

export const CategoryItemContainer = styled.div({
  height: 70,
  textAlign: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
  borderRadius: 10,
  cursor: "pointer",
  "&:hover": {
    background: "#7eabf2 !important",
    color: "#fff !important",
  },
});

export const CategoryBody = styled.div({
  display: "block",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 10,
  width: "100%",
  height: 330,
  marginTop: 30,
});

export const MessageSubContainer = styled.div({
  height: 320,
});

export const TakeAnotherQuiz = styled.button({
  padding: 10,
  color: "#fff",
  backgroundColor: "#33de61",
  width: "50%",
});
