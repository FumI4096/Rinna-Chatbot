import React from 'react'
import PropTypes from 'prop-types'


<<<<<<< Updated upstream
const FooterAreas = (image, imageAlt, link, title) => {
    return (
        <article>
            <img src={image} alt={imageAlt}/>
            <h2><a href={link} target='_blank' rel='noreferrer'>{title}</a></h2>
        
        </article>
    )
=======
const FooterAreas = ({imageExist, iconExist, icon, image, imageAlt, link, title}) => {
    if(imageExist){
        return(
            <>
                <li className='h-12 flex items-center gap-4'>
                    <img src={image} alt={imageAlt} className='h-full rounded-full'/>
                    <a href={link} target='_blank' rel='noreferrer'>{title}</a>
                    
                </li>
            </>
        )
    }
    else if(iconExist){
        return(
            <li><a href={link} target='_blank' rel='noreferrer'>{icon}</a></li>
        )
    }
>>>>>>> Stashed changes
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