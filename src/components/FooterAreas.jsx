import React from 'react'
import PropTypes from 'prop-types'

const FooterAreas = ({imageExist, iconExist, icon, image, imageAlt, link, title}) => {
    if(imageExist){
        return(
            <>
                <li className='h-12 flex items-center gap-4'>
                    <img src={image} alt={imageAlt} className='h-full rounded-full'/>
                    <a href={link} target='_blank' rel='noreferrer' className='font-mono text-lg font-bold underline-offset-2 underline'>{title}</a>
                    
                </li>
            </>
        )
    }
    else if(iconExist){
        return(
            <li className='h-auto w-auto flex flex-row items-center gap-3'>
                <div className='h-auto w-auto p-3 rounded-full bg-violet-800 flex justify-center items-center text-white'>{icon}</div>
                <a href={link} target='_blank' rel='noreferrer' className='font-mono text-base font-bold text-lg underline-offset-2 underline'>{title}</a>
            </li>
        )
    }

}

FooterAreas.propTypes = {
    imageExist: PropTypes.bool,
    iconExist: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,

}

FooterAreas.defaultPrps = {
    imageExist: false,
    iconExist: false
}

export default FooterAreas