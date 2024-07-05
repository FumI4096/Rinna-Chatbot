import React from 'react'
import { Link } from 'react-router-dom';
import Griffin from '../images/Griffin.png'

const Nav = () => {
    return (
        <nav className= "bg-violet-700 flex justify-between items-center h-20 w-full">
            <section className='h-full flex flex-row items-center'>
                <img src={Griffin} alt="logo" className='h-full pl-24 drop-shadow-xl'/>
                <p className='pl-1 text-4xl font-anton uppercase text-white tracking-custom-spacing-1'>Princy</p>
            </section>
            <ul className="pr-24 flex items-center h-full">
                <li className='h-full'><Link to='/home' className='bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono'>Home</Link></li>
                <li className='h-full ml-4'><Link to='/about' className='bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono'>About</Link></li>
                <li className='h-full ml-4'><Link to='/feedback' className='bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono'>Feedback</Link></li>
                <li className='h-12 bg-violet-200 ml-4 rounded-full'><Link to='/chat' className='h-full w-40 flex items-center justify-center text-sm text-black font-bold font-mono'>Chat with Rinna</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;