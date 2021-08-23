import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constraints/index.js";
import Category from "./Category.js";
import CategoryForm from "./CategoryForm.js";
import '../styles/CategoryContainer.css'

export default function CategoryContainer() {
  const [categories, setCategories] = useState(null);

  // READ

  useEffect(() => {
    fetch(BASE_URL + "categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  function populateCategories() {
    // console.log(categories);
    //let ctr = 1, or javascript map with index ?
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
      .then((json) => setCategories([...categories, json]));

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

    const newCategories = categories.map((g) => {
      if (g.id === category.id) {
        g = category;
      }
      return g;
    });
    setCategories(newCategories);
  }

  // DELETE

  function deleteCategory(category) {
    fetch(BASE_URL + "categories/" + category.id, {
      method: "DELETE",
    });
    const newCategories = categories.filter((g) => g.id !== category.id);
    setCategories(newCategories);
  }

  return (
    <div className="container">
      <h2 className="categories-header">All Categories</h2>
      <div className="row">
        <div className="category-container">{categories && populateCategories()}</div>
      </div>
      <div className="row">
        <CategoryForm createCategory={createCategory} />
      </div>
    </div>
  );
}
