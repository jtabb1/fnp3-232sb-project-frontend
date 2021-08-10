import React, {useState} from 'react'

export default function ProductForm({createProduct}) {
    const [formData, setFormData] = useState({name: "", price: []})

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createProduct(formData)
        setFormData({name: "", price: []})
    }


    return (
        <form>
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name}/>
            <label>Price: </label>
            <input onChange={handleChange} name="price" value={formData.price}/>
            <button onClick={handleSubmit}>List Product!</button>
        </form>
    )
}
