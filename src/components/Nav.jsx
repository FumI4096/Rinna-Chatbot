import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/feedback'>Feedback</Link></li>
                <li><Link to='/chat'>Chat with Rinna</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;