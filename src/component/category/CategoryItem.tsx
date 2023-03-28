import { FC, useEffect } from "react";
import { CategoryItemContainer } from "../../assets/css/main";
import { CategoryItemInterface } from "../../interface/redux";
import { useAppDispatch } from "../../redux/store";
import { getQuestions } from "../../redux/reducer/QuestionSlice";
import { QuestionsInterface } from "../../interface/redux";
import { useNavigate } from "react-router-dom";

const CategoryItem: FC<CategoryItemInterface> = ({ title, questions }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uname = localStorage.getItem("uname") || [];

  const validateCategory = (questionArray: QuestionsInterface[]) => {
    dispatch(getQuestions(questionArray));
    navigate("/");
  };

  useEffect(() => {
    if (!uname.length) return navigate("/createAccount");
  }, [uname]);

  return (
    <CategoryItemContainer onClick={() => validateCategory(questions)}>
      {title}
    </CategoryItemContainer>
  );
};

export default CategoryItem;
