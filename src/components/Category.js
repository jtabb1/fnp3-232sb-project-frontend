import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "../styles/Category.css"

export default function Category({ category, deleteCategory, updateCategory }) {
  const [newCategory, setNewCategory] = useState({ ...category });
  const [editMode, setEditMode] = useState(false);

  function handleChange(e) {
    const updatedValue = { ...newCategory };
    updatedValue[e.target.name] = e.target.value;
    setNewCategory({ ...updatedValue });
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateCategory(newCategory);
    setEditMode(false);
  }

  return (
    <div className="category-card">
      <Link to={`/categories/${category.id}`}>
        <p>{category.name}</p>
      </Link>
      <p>{category.location}</p>
      {editMode && (
        <>
          <button onClick={() => deleteCategory(category)}>Delete Category</button>

          <form onSubmit={handleUpdate}>
            <input name="name" value={newCategory.name} onChange={handleChange} />
            <input
              name="location"
              value={newCategory.location}
              onChange={handleChange}
            />
            <button type="submit">Update Category</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}
