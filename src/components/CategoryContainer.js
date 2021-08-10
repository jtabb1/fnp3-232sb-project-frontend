import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constraints/index.js";
import Category from "./Category.js";
import CategoryForm from "./CategoryForm.js";
import '../styles/CategoryContainer.css'

export default function CategoryContainer() {
  const [categories, setCategorys] = useState(null);

  // READ

  useEffect(() => {
    fetch(BASE_URL + "categories")
      .then((res) => res.json())
      .then((json) => setCategorys(json));
  }, []);

  function populateCategorys() {
    console.log(categories);
    return categories.map((category) => (
      <Category category={category} deleteCategory={deleteCategory} updateCategory={updateCategory} key={category.id} />
    ));
  }

  // CREATE

  function createCategory(category) {
    fetch(BASE_URL + "categories", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setCategorys([...categories, json]));

    // PESSIMISTIC RENDERING
  }

  // UPDATE

  function updateCategory(category) {
    fetch(BASE_URL + "categories/" + category.id, {
      method: "PATCH",
      body: JSON.stringify(category),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // OPTIMISTIC RENDERING

    const newCategorys = categories.map((g) => {
      if (g.id === category.id) {
        g = category;
      }
      return g;
    });
    setCategorys(newCategorys);
  }

  // DELETE

  function deleteCategory(category) {
    fetch(BASE_URL + "categories/" + category.id, {
      method: "DELETE",
    });
    const newCategorys = categories.filter((g) => g.id !== category.id);
    setCategorys(newCategorys);
  }

  return (
    <div>
      <h2 className="categories-header">All Categorys</h2>
      <div className="category-container">{categories && populateCategorys()}</div>
      <CategoryForm createCategory={createCategory} />
    </div>
  );
}
