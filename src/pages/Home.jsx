import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../components/Article'

function Home() {
    return (
        <>
            {/*Hero section*/}
            <header>
                <button><Link to='/'>Getting Started</Link></button>
                <button>Give us your Comment</button>
            </header>

            
            <section>
                <Article 
                    title="Colegio de San Juan de Letran Calamba" 
                    comment="Some message"
                />
                <Article
                    title="School of Computer Studies and Technology" 
                    comment="Some message"
                />
            </section>

            <section>
            <Article 
                    title="What is Artificial Intelligence?" 
                    comment="Some message"
                />
                <Article
                    title="Who is Rinna?" 
                    comment="Some message"
                />
            </section>
        </>

    )
}

export default Home