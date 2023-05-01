import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (event) => {
    if (categories.includes(event)) return;

    setcategories([...categories, event]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};
