import React, {useState} from 'react'

export default function GymForm({createGym}) {
    const [gym, setGym] = useState({name: "", location: ""})

    function handleChange(e) {
        const updatedValue = {...gym}
        updatedValue[e.target.name] = e.target.value
        setGym(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createGym(gym)
    } 


    return (
        <div>
            <h2>Create New Gym</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={gym.name} onChange={handleChange} />
                <input name="location" value={gym.location} onChange={handleChange} />
                <button type="submit">Create Gym</button>
            </form>
        </div>
    )
}
