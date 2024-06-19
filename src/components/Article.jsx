import React from 'react'
import PropTypes from 'prop-types'

const Article = props => {
    return (
        <>
        <article>
            <h1>{props.title}</h1>
            <p>{props.comment}</p>

        </article>
        <img src="" alt="" />
        </>

    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
}

export default Article