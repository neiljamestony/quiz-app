import {
  CategoryCard,
  CategoryHeader,
  CategoryBody,
} from '../../assets/css/main';
import CategoryItem from './CategoryItem';
import { useAppSelector } from '../../redux/store';

export default function Category() {
  const { categories } = useAppSelector((state) => state.questionState);
  return (
    <CategoryCard>
      <CategoryHeader>Select Category</CategoryHeader>
      <CategoryBody>
        {categories.map((value, key) => {
          return (
            <CategoryItem
              isPassed={value.passed}
              title={value.category}
              questions={value.questions}
              icon={value.icon}
              key={key}
            />
          );
        })}
      </CategoryBody>
    </CategoryCard>
  );
}
