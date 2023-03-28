import React from "react";
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
      <CategoryHeader>Select Category</CategoryHeader>
      <CategoryBody>
        {categories.map((value, key) => {
          return (
            <CategoryItem
              title={value.category}
              questions={value.questions}
              key={key}
            />
          );
        })}
      </CategoryBody>
    </CategoryCard>
  );
}
