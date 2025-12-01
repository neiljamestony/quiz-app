import { FC, useEffect } from 'react';
import {
  CategoryItemContainer,
  Passed,
  CategoryItemTitle
} from '../../assets/css/main';
import { CategoryItemInterface } from '../../interface/redux';
import { useAppDispatch } from '../../redux/store';
import { getQuestions } from '../../redux/reducer/QuestionSlice';
import { QuestionsInterface } from '../../interface/redux';
import { useNavigate } from 'react-router-dom';

const CategoryItem: FC<CategoryItemInterface> = ({
  questions,
  icon,
  title,
  isPassed,
  backgroundColor
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uname = localStorage.getItem('uname') || [];

  const validateCategory = (questionArray: QuestionsInterface[]) => {
    dispatch(getQuestions({ category: title, questions: questionArray }));
    navigate('/');
  };

  useEffect(() => {
    if (!uname.length) return navigate('/createAccount');
  }, [uname]);

  return (
    <CategoryItemContainer
      style={{
        cursor: isPassed ? 'not-allowed' : 'pointer',
        backgroundColor: backgroundColor
      }}
      onClick={() => (isPassed ? '' : validateCategory(questions))}
    >
      {isPassed ? <Passed>COMPLETED</Passed> : <img src={icon} alt={`${icon}`} height={50} />}
    </CategoryItemContainer>
  );
};

export default CategoryItem;
