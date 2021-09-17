import React, {useState} from 'react'

export default function CategoryForm({createCategory}) {
    const [category, setCategory] = useState({photo_filename: "", name: ""})

    function handleChange(e) {
        const updatedValue = {...category}
        updatedValue[e.target.name] = e.target.value
        setCategory(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createCategory(category)
    } 


    return (
        <div>
          <br />
            <h2>Create New Category</h2>
            <form onSubmit={handleSubmit}>
              <input name="name" value={category.name} onChange={handleChange} />
              <input name="photo_filename" value={category.photo_filename} onChange={handleChange} />
                <button type="submit">Create Category</button>
            </form>
        </div>
    )
}
