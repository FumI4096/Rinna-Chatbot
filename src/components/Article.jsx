import React from 'react'
import PropTypes from 'prop-types'

const Article = ({title, comment, image, showButton, buttonLink, buttonText}) => {
    const getContentBackground = (string) => {
        if(string === "Artificial Intelligence (AI)" || string === "Get a Chitchat with Princy" || string === "Application Programming Interface (API)"){
            return `odd:bg-gray-custom-1 even:bg-black`
        }
        else if (string === "Colegio de San Juan de Letran Calamba" || "Credits to Rinna Developers" || string === "School of Computer Studies and Technology"){
            return `odd:bg-gray-custom-2 even:bg-gray-custom-1`
        }
    }

    return (
        <>
            <article className={`h-auto flex px-24 py-16 gap-32 even:flex-row-reverse max-lg:flex-col max-lg:even:flex-col max-lg:gap-12 max-md:px-16 ${getContentBackground(title)}`}>
                <img src={image} alt="" className='h-80 rounded-full drop-shadow-xl self-center max-xl:h-72 max-md:h-64'/>
                <aside className={`${(showButton) ? 'flex flex-col' : ''}`}>
                    <h1 className='text-3xl mb-10 text-white font-mono underline underline-offset-4 font-bold odd:decoration-violet-400 even:decoration-violet-600 max-lg:text-center'>{title}</h1>
                    <p className={`text-white leading-8 max-lg:text-center ${(showButton) ? 'mb-auto max-lg:mb-20 max-md:mb-10' : ''}`}>{comment}</p>
                    {showButton && (
                        <div className='max-lg:self-center'>
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