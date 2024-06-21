import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../components/Article'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            {/*Hero section*/}
            <header>
                <button><Link to='/'>Getting Started</Link></button>
                <button>Give us your Comment</button>
            </header>

            {/*Main secction*/}
            <main>
                <section>
                    <Article 
                        title="Colegio de San Juan de Letran Calamba" 
                        comment="Some message"
                        image=''
                    />
                    <Article
                        title="School of Computer Studies and Technology" 
                        comment="Some message"
                        image=''
                    />

                    <Article
                        title="Get a Chitchat with Rinna" 
                        comment="Some message"
                        image=''
                        showButton={true}                   
                    />
                </section>
            </main>

            {/*Footer section*/}
            <Footer />

        </>

    )
}

export default Home