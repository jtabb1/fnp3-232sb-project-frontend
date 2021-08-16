import React, {useState} from 'react'

export default function ProductForm({createProduct}) {
    const [formData, setFormData] = useState({name: "", price: [], qty_in_inventory: []})

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createProduct(formData)
        setFormData({name: "", price: [], qty_in_inventory: []})
    }


    return (
        <form>
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name}/>
            <label>Quantity: </label>
            <input onChange={handleChange} name="qty_in_inventory" value={formData.qty_in_inventory}/>
            <label>Price: </label>
            <input onChange={handleChange} name="price" value={formData.price}/>
            <button onClick={handleSubmit}>List Product!</button>
        </form>
    )
}
