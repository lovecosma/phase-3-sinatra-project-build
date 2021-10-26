import React from 'react'
import {NavLink} from "react-router-dom"
export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                    <a href="/" className="brand-logo">Sinatra Playlister</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/tracks">Tracks</NavLink></li>                    
                    <li><NavLink to="/artists">Artists</NavLink></li>
                    <li><NavLink to="/tracks/new">Create Track</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
