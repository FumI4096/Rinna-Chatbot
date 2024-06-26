import React from 'react'

function Feedback() {
    return (
        <>
            <h2>We want to know your thoughts!</h2>
            <div>
                <form action="">
                    <article>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name'/>
                    </article>
                    <article>
                        <label htmlFor="">Email:</label>
                        <input type="text" id='email'/> 
                    </article>
                    <article>
                        <label htmlFor="message">Message:</label>
                        <textarea name="" id="message"></textarea> 
                    </article>

                </form> 
            </div>
        </>

    )
}

export default Feedback