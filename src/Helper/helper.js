import axios from "axios";

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const getAllCategories = (data) => {
  const categoryArray = data.map((item) => item.category);
  const uniqCategories = [...new Set(categoryArray)];
  return uniqCategories;
};

/* Get All Data */
export const getAllData = () => {
  const food = axios
    .get(" http://localhost:3000/popularFood")
    .then((data) => data.data);
  return food;
};
