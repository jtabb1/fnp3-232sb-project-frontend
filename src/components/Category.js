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

  const imgPath = "/assets/";
  const img_filename = category.photo_filename;
  const imgUrl = `${imgPath}${img_filename}`;
  
  return (
    <div className="col category-card">
      <Link to={`/categories/${category.id}`}>
        <p>{category.name}</p>
      </Link>

      <img className="img-fluid img-responsive rounded product-image" src={imgUrl} alt={category.name} />

      {editMode && (
        <div>
          <button onClick={() => deleteCategory(category)}>Delete Category</button>

          <form onSubmit={handleUpdate}>
            <input name="name" value={newCategory.name} onChange={handleChange} />
            <input
              name="photo_filename"
              value={newCategory.photo_filename}
              onChange={handleChange}
            />
            <button type="submit">Update Category</button>
          </form>
        </div>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}
