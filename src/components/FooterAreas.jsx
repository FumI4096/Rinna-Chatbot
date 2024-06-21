import React from 'react'
import PropTypes from 'prop-types'


const FooterAreas = (props) => {
    return (
        <article>
            <img src="" alt="" />
            <h2><a href="">{props.title}</a></h2>
        
        </article>
    )
}

FooterAreas.propTypes = {
    title: PropTypes.string.isRequired
}

export default FooterAreas