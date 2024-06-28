import React from 'react'
import { Link } from 'react-router-dom';
import Griffin from '../images/Griffin.png'

const Nav = () => {
    return (
        <nav className= "bg-violet-700 flex justify-between items-center h-20 w-full">
            <img src={Griffin} alt="logo" className='h-full pl-24 drop-shadow-xl'/>
            <ul className="pr-24 flex items-center h-full">
                <li className='h-full flex items-center'><Link to='/home'>Home</Link></li>
                <li className='h-full flex items-center pl-14'><Link to='/about'>About</Link></li>
                <li className='h-full flex items-center pl-14'><Link to='/feedback'>Feedback</Link></li>
                <li className='h-full flex items-center pl-14'><Link to='/chat'>Chat with Rinna</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;