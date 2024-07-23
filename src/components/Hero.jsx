import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Hero = ({buttonExist, buttonOne, buttonTwo, phrase }) => {
    return (
        <>
            <header className={`relative after:content-[""] after:absolute after:inset-0 after:bg-neutral-950/70 isolation ${
                (phrase === "Innovating Education, Empowering Futures") ? 'bg-heroBackgroundOne' : 'bg-heroBackgroundTwo' 
            } bg-no-repeat bg-cover h-2xl flex items-center justify-center gap-3 max-lg:h-3xl max-lg:flex-col max-md:h-5xl px-16`}>
                <p className='text-5xl text-white z-10 font-anton tracking-custom-spacing-1 text-center max-md:text-6xl max-md:leading-custom-spacing-1'>{phrase}</p>
                { buttonExist && (      
                    <>
                        <div className='h-auto w-auto z-10'><Link to='/chat' className='bg-violet-600 text-white text-base font-bold flex items-center justify-center rounded-full h-14 w-64 max-lg:w-96'>{buttonOne}</Link></div>
                        <div className='h-auto w-auto z-10'><Link to='/feedback' className='bg-white text-violet-400 text-base font-bold flex items-center justify-center rounded-full h-14 w-64 max-lg:w-96'>{buttonTwo}</Link></div>
                    </>
                )}
            </header>
        </>
    )
}

Hero.propTypes = {
    buttonExist: PropTypes.bool,
    buttonOne: PropTypes.string.isRequired,
    buttonTwo: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired
}

Hero.defaultProps = {
    buttonExist: false,
    phrase: ''
}

export default Hero
