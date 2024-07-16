import React from 'react'
import Article from '../components/Article'
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Letran from "../images/letran-logo.jpg"
import SCST from "../images/scst-logo.jpg"
import Rinna from "../images/rinna.png"

function About() {
    return (
        <>
            <Hero 
                phrase='Innovating Education, Empowering Futures'
                buttonExist={false}
            />
            <main className=''>
                <Article 
                    title="Colegio de San Juan de Letran Calamba" 
                    comment="Arriba at your service! --- Colegio de San Juan de Letran Calamba has embarked on an exciting journey by forming a strategic partnership with Rinna. Through this collaboration, Letran is able to harness Rinna's advanced built-in API and AI capabilities, seamlessly integrating these cutting-edge technologies into its curriculum. As a result, students benefit from a modern and relevant educational experience, enriched with the latest AI advancements. Furthermore, Letran's commitment to excellence is evident in its provision of certification examinations, which formally recognize and validate the students' proficiency and skills."
                    image={Letran}
                />
                <Article
                    title="School of Computer Studies and Technology" 
                    comment="Hello Griffins! --- 
                    The School of Computer Studies and Technology is renowned for its innovative exploration of Rinna's AI, made possible through its valuable partnership with Rinna. With the added collaboration with Certiport, students gain exceptional opportunities for certification and skill development. We are immensely grateful for these partnerships, which significantly enhance our educational offerings and empower our students to excel in the ever-evolving field of technology."
                    image={SCST}
                />
                <Article 
                    title="Credits to Rinna Developers"
                    comment="We extend our heartfelt gratitude to Rinna for their partnership, which enables Colegio de San Juan de Letran Calamba to further enhance our curriculum in this era of AI. This collaboration ensures our students receive cutting-edge education, equipping them with the skills needed for the future."
                    image={Rinna}
                />
            </main>

            <Footer />
        </>
    
    )
}

export default About