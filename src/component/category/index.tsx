import {
  CategoryCard,
  CategoryHeader,
  CategoryBody
} from "../../assets/css/main";
import CategoryItem from "./CategoryItem";
import { useAppSelector } from "../../redux/store";

export default function Category() {
  const { categories } = useAppSelector((state) => state.questionState);
  return (
    <CategoryCard>
      <CategoryHeader>Select Category</CategoryHeader>
      <CategoryBody>
        {categories.map((category, key) => {
          return (
            <CategoryItem
              isPassed={category.passed}
              title={category.category}
              questions={category.questions}
              icon={category.icon}
              key={key}
              backgroundColor={category.backgroundColor}
            />
          );
        })}
      </CategoryBody>
    </CategoryCard>
  );
}
