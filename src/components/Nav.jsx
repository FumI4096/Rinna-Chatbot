import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Griffin from '../images/Griffin.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Nav = () => {
    const [viewNav, setViewNav] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            (window.innerWidth <= 1280) ? setViewNav(true) : setViewNav(false)
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className= "bg-violet-700 flex justify-between items-center h-20 w-full sticky top-0 z-30">
            <section className='h-full flex flex-row items-center pl-24 max-md:pl-9'>
                <img src={Griffin} alt="logo" className='h-full drop-shadow-xl'/>
                <p className='pl-1 text-4xl font-anton uppercase text-white tracking-custom-spacing-1'>Princy</p>
            </section>
            <ul className={`pr-24 flex items-center h-full z-30 max-xl:${(viewNav) ? 'hidden'  : 'block'} max-xl:absolute max-xl:top-20 max-xl:w-full max-xl:p-0`}>
                <li className='h-full z-30 max-xl:h-28 max-md:h-40'><Link to='/home' className='hover:bg-slate-900/20 active:bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono max-xl:w-full max-xl:bg-violet-500 max-xl:text-white max-xl:text-xl max-xl:hover:bg-violet-600 max-xl:active:bg-violet-800 max-md:text-xl max-md:font-bold' onClick={() => setViewNav(true)}>Home</Link></li>
                <li className='h-full z-30 max-xl:h-28 max-md:h-40'><Link to='/about' className='hover:bg-slate-900/20 active:bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono max-xl:w-full max-xl:bg-violet-500 max-xl:text-white max-xl:text-xl max-xl:hover:bg-violet-600 max-xl:active:bg-violet-800 max-md:text-xl max-md:font-bold' onClick={() => setViewNav(true)}>About</Link></li>
                <li className='h-full z-30 max-xl:h-28 max-md:h-40'><Link to='/feedback' className='hover:bg-slate-900/20 active:bg-slate-950/20 h-full w-32 flex items-center justify-center text-base uppercase text-white font-mono max-xl:w-full max-xl:bg-violet-500 max-xl:text-white max-xl:text-xl max-xl:hover:bg-violet-600 max-xl:active:bg-violet-800 max-md:text-xl max-md:font-bold' onClick={() => setViewNav(true)}>Feedback</Link></li>
                <li className='h-12 bg-white ml-4 rounded-full z-30 max-xl:h-24 max-md:h-40 max-xl:m-0 max-xl:rounded-none'><Link to='/chat' className='h-full w-48 flex items-center justify-center text-base text-black font-bold font-mono max-xl:w-full     max-xl:text-xl max-xl:font-normal max-xl:text-violet-700 max-xl:hover:bg-gray-100 max-xl:active:bg-gray-200 max-xl:hover:text-violet-600 max-xl:uppercase' onClick={() => setViewNav(true)}>Chat with Rinna</Link></li>
            </ul>
            <aside className='pr-24 hidden max-xl:block max-md:pr-9'>
                <RxHamburgerMenu onClick={() => setViewNav(false)} className={`drop-shadow-lg text-white text-4xl ${(viewNav) ? 'block cursor-pointer' : 'hidden'}`}/>
                <MdClose onClick={() => setViewNav(true)} className={`drop-shadow-lg text-white text-4xl ${(viewNav) ? 'hidden' : 'block cursor-pointer'}`}/>

                    

            </aside>
            
        </nav>
    )
}
export default Nav;