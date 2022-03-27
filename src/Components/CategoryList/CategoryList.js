import React, { useState, useEffect } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { getAllCategories, getAllData } from "../../Helper/helper";

function CategoryList({ handleFilter }) {
  const [categories, setCategories] = useState();
  useEffect(() => {
    getAllData().then((response) => setCategories(getAllCategories(response)));
  }, []);
  const handleClick = (category) => {
    handleFilter(category);
  };
  return (
    <ul>
      {categories?.map((category) => (
        <li onClick={() => handleClick(category)}>
          <BsCaretRightFill /> {category}
        </li>
      ))}
    </ul>
  );
}
export default CategoryList;
