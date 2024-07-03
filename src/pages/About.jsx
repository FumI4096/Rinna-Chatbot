import React from 'react'
import Article from '../components/Article'
import Footer from "../components/Footer"

function About() {
    return (
        <>
            <main className=''>
                <Article 
                    title="Colegio de San Juan de Letran Calamba" 
                    comment="Arriba! Your "
                    image=""
                />
                <Article
                    title="School of Computer Studies and Technology" 
                    comment="Hello Griffins!"
                    image=""
                />
                <Article 
                    title="Credits to Rinna Developers"
                    comment="some message"
                    image=''
                />
            </main>

            <Footer />
        </>
    
    )
}

export default About