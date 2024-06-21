import React from 'react'
import PropTypes from 'prop-types'

const Article = props => {
    return (
        <>
            <article>
                <aside>
                    <h1>{props.title}</h1>
                    <p>{props.comment}</p>
                </aside>
                <img src={props.image} alt="" />
            </article>
            {props.showButton && (
                <a href={props.buttonLink}>{props.buttonText}</a>
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