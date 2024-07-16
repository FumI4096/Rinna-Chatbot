import React from 'react'
import Griffin from '../images/Griffin2.png'
import FormTypes from '../components/FormTypes'

function Feedback() {
    return (
        <>
            <main className='h-[831px] bg-violet-900 flex justify-center items-center drop-shadow-2xl'>
                <section className='flex h-[530px] w-[1080px]'>
                    <aside className='bg-white w-full p-16 rounded-l-2xl'>
                        <img src={Griffin} alt="" className='h-full w-full rounded-full'/>
                    </aside>
                    <section className='bg-gray-custom-2 px-20 py-10 w-full flex flex-col justify-between items-center relative rounded-r-2xl'>
                        <h2 className='text-violet-500 text-xl font-mono font-bold drop-shadow-md pb-4'>We want to know your thoughts!</h2>
                        <div className='w-full'>
                            <form action="" className='flex flex-col gap-5'>
                                <FormTypes 
                                    label='Username'
                                    id='usn'
                                />
                                <FormTypes 
                                    label='Email'
                                    id='email'
                                />
                                <FormTypes 
                                    label='Give us your suggestion'
                                    id='message'
                                />
                                <input type="submit" className='w-full bg-violet-500 h-12 rounded-full font-bold text-white drop-shadow-xl hover:bg-violet-600 active:bg-violet-700'/>
                            </form> 
                        </div>
                    </section>
                </section>


            </main>
        </>

    )
}

export default Feedback