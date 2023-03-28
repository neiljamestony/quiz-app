import {
  CategoryCard,
  CategoryHeader,
  CategoryBody,
} from "../../assets/css/main";
import { categories } from "../questions/question";
import CategoryItem from "./CategoryItem";

export default function Category() {
  return (
    <CategoryCard>
      <CategoryHeader>
        <b>Select Category</b>
      </CategoryHeader>
      <CategoryBody>
        {categories.map((value, key) => {
          return (
            <CategoryItem
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
