import React, {useState} from 'react'

export default function GymMemberForm({createGymMember}) {
    const [formData, setFormData] = useState({name: "", focus: ""})

    function handleChange(e) {
        formData[e.target.name] = e.target.value
        setFormData({...formData})
    }

    function handleSubmit(e) {
        e.preventDefault()
        createGymMember(formData)
        setFormData({name: "", focus: ""})
    }


    return (
        <form>
            <label>Name: </label>
            <input onChange={handleChange} name="name" value={formData.name}/>
            <label>Focus: </label>
            <input onChange={handleChange} name="focus" value={formData.focus}/>
            <button onClick={handleSubmit}>Join Gym!</button>
        </form>
    )
}
