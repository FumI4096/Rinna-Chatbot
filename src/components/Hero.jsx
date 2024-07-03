import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Hero = ({buttonExist, buttonOne, buttonTwo, sentence}) => {
    return (
        <>
            <header className={`relative after:content-[""] after:absolute after:inset-0 after:bg-neutral-950/70 isolation ${
                (sentence === "#IChooseLetran") ? 'bg-heroBackgroundOne' : 'bg-heroBackgroundTwo'
            } bg-no-repeat bg-cover h-2xl flex items-center justify-center gap-3`}>
                <p>{sentence}</p>
                { buttonExist && (      
                    <>
                        <div className='h-auto w-auto z-10'><Link to='/chat' className='bg-violet-600 text-white text-base font-bold  flex items-center justify-center rounded-full h-14 w-64'>{buttonOne}</Link></div>
                        <div className='h-auto w-auto z-10'><Link to='/feedback' className='bg-white text-violet-400 text-base font-bold flex items-center justify-center rounded-full h-14 w-64'>{buttonTwo}</Link></div>
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
    sentence: PropTypes.string.isRequired
}

Hero.defaultProps = {
    buttonExist: true,
    sentence: ''
}

export default Hero
