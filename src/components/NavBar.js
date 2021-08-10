import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/gyms">All Gyms</Link>
        </div>
    )
}
