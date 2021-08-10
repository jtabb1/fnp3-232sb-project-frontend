import React, {useState} from 'react'

export default function CategoryForm({createCategory}) {
    const [category, setCategory] = useState({name: "", location: ""})

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
            <h2>Create New Category</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={category.name} onChange={handleChange} />
                <input name="location" value={category.location} onChange={handleChange} />
                <button type="submit">Create Category</button>
            </form>
        </div>
    )
}
