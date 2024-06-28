import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../components/Article'
import Footer from '../components/Footer'

function Home() {
    return (    
        <>
            {/*Hero section*/}
            <header className='relative after:content-[""] after:absolute after:inset-0 after:bg-neutral-950/60 isolation bg-headerBackground bg-no-repeat bg-cover h-2xl flex items-center justify-center gap-3'>
                <button className='h-auto w-auto z-10'><Link to='/chat' className='bg-black text-white flex items-center justify-center rounded-full'>Getting Started</Link></button>
                <button className='h-auto w-auto z-10'><Link className='bg-black text-white flex items-center justify-center rounded-full h-auto text-center'>Give us your Comment</Link></button>
            </header>

            {/*Main secction*/}
            <main>
                <section>
                    <Article 
                        title="Artificial Intelligence (AI)" 
                        comment="Artificial intelligence (AI) has revolutionized nearly every facet of modern life, fundamentally altering how we work, communicate, and live. AI-driven technologies such as personal assistants, recommendation systems, and autonomous vehicles have streamlined daily tasks, enhanced productivity across industries, and improved decision-making processes. In healthcare, AI enables faster and more accurate diagnoses, while in finance, it powers sophisticated fraud detection systems and personalized banking experiences. Beyond efficiency gains, AI is reshaping education, entertainment, and transportation, paving the way for a more interconnected and innovative global society."
                        image=''
                    />
                    <Article
                        title="Application Programming Interface (API)" 
                        comment="APIs (Application Programming Interfaces) play a pivotal role in enabling developers to integrate AI into their applications seamlessly. These interfaces serve as bridges between AI services and developers, offering standardized methods for accessing and utilizing AI capabilities without needing deep expertise in AI algorithms or infrastructure. Developers can leverage AI APIs provided by major tech companies like Google, Microsoft, and IBM, which offer pre-trained models for natural language processing, image recognition, and predictive analytics. This accessibility allows developers to incorporate advanced AI functionalities such as voice recognition in apps, sentiment analysis in customer feedback systems, and recommendation engines in e-commerce platforms. APIs also facilitate iterative development by providing updates and improvements to AI models, ensuring that applications stay current with advancements in AI technology. This democratization of AI through APIs empowers developers to innovate rapidly, enhance user experiences, and unlock new possibilities across diverse industries."
                        image=''
                    />

                    <Article
                        title="Get a Chitchat with Rinna" 
                        comment="Curious about AI, need assistance, or just want to chat? Feel free to start a conversation with Rinna—I'm here to help!"
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