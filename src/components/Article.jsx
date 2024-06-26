import React from 'react'
import PropTypes from 'prop-types'

const Article = ({title, comment, image, showButton, buttonLink, buttonText}) => {
    return (
        <>
            <article>
                <aside>
                    <h1>{title}</h1>
                    <p>{comment}</p>
                </aside>
                <img src={image} alt="" />
            </article>
            {showButton && (
                <a href={buttonLink}>{buttonText}</a>
            )}

        </>

    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    buttonLink: PropTypes.string,
    buttonText: PropTypes.string
}

Article.defaultProps = {
    showButton: false,
    buttonLink: '#',
    buttonText: 'Click'

}

export default Article