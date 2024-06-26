import React from 'react'
import PropTypes from 'prop-types'


const FooterAreas = (image, imageAlt, link, title) => {
    return (
        <article>
            <img src={image} alt={imageAlt}/>
            <h2><a href={link} target='_blank' rel='noreferrer'>{title}</a></h2>
        
        </article>
    )
}

FooterAreas.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default FooterAreas