import React from 'react'
import PropTypes from 'prop-types'

const Article = ({title, comment, image, showButton, buttonLink, buttonText}) => {
    return (
        <>
            <article className={`h-96 flex px-24 py-16 gap-32  
                    ${
                        (title !== "Artificial Intelligence (AI)" && title !== "Get a Chitchat with Princy") ? 'flex-row-reverse bg-violet-custom-1 decoration-violet-400' : 'flex-row bg-gray-custom-1'
                    }
                `}>
                <img src={image} alt="" className='h-full rounded-full drop-shadow-xl'/>
                <aside className={`
                    ${
                        (showButton) ? 'flex flex-col' : ''
                    }
                    `}>
                    <h1 className={`text-3xl mb-10 text-white font-mono underline underline-offset-4 font-bold
                        ${
                            (title !== "Artificial Intelligence (AI)" && title !== "Get a Chitchat with Princy") ? 'decoration-violet-600' : 'decoration-violet-400'

                        } 

                    `}>{title}</h1>
                    <p className={`text-white leading-8
                        ${
                            (showButton) ? 'mb-auto' : ''
                        }
                    `}>{comment}</p>
                    {showButton && (
                        <div>
                            <a href={buttonLink} className=' text-white bg-violet-600 px-8 py-3 rounded-lg font-semibold'>{buttonText}</a>
                        </div>

                    )}
                </aside>
            </article>


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