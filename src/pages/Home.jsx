import React from 'react'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Rinna from '../images/rinna.jpg'
import AI from '../images/AIpic.jpg'
import API from '../images/APIpic.jpg'

function Home() {
    return (    
        <>
            {/*Hero section*/}
            <Hero 
                buttonOne="Get Started"
                buttonTwo="Give us your Comment"
            
            />

            {/*Main secction*/}
            <main className='h-auto bg-black'>
                <section className='flex flex-col'>
                    <Article 
                        title="Artificial Intelligence (AI)" 
                        comment="Artificial intelligence (AI) has revolutionized nearly every facet of modern life, fundamentally altering how we work, communicate, and live. AI-driven technologies such as personal assistants, recommendation systems, and autonomous vehicles have streamlined daily tasks, enhanced productivity across industries, and improved decision-making processes. In healthcare, AI enables faster and more accurate diagnoses, while in finance, it powers sophisticated fraud detection systems and personalized banking experiences. Beyond efficiency gains, AI is reshaping education, entertainment, and transportation, paving the way for a more interconnected and innovative global society."
                        image={AI}
                    />
                    <Article
                        title="Application Programming Interface (API)" 
                        comment="APIs (Application Programming Interfaces) are essential for integrating AI into applications easily. They connect AI services with developers, offering standard methods to use AI without needing deep AI knowledge. Major tech companies like Google, Microsoft, and IBM provide AI APIs with pre-trained models for tasks like natural language processing, image recognition, and predictive analytics. These APIs enable developers to add advanced features such as voice recognition, sentiment analysis, and recommendation engines to their apps. They also support ongoing development by updating AI models, ensuring apps remain current with AI advancements. This approach democratizes AI, allowing developers to innovate quickly, improve user experiences, and explore new opportunities across various industries."
                        image={API}
                    />

                    <Article
                        title="Get a Chitchat with Rinna" 
                        comment="Curious about AI, need assistance, or just want to chat? Feel free to start a conversation with Rinna—I'm here to help!"
                        image={Rinna}
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