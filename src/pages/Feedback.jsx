import React from 'react'
import Griffin from '../images/Griffin2.png'
import FormTypes from '../components/FormTypes'

function Feedback() {
    return (
        <>
            <main className='px-24 py-16 h-[831px] bg-violet-900 flex justify-center items-center drop-shadow-2xl max-xl:h-auto max-md:px-12'>
                <section className='flex h-[530px] w-[1080px] max-xl:flex-col max-xl:h-auto'>
                    <aside className='bg-white w-full p-16 rounded-l-2xl flex justify-center items-center max-xl:h-36 max-xl:p-0 max-xl:rounded-none max-md:h-32'>
                        <img src={Griffin} alt="" className='h-full rounded-full'/>
                    </aside>
                    <section className='bg-gray-custom-2 px-20 py-10 w-full flex flex-col justify-between items-center relative rounded-r-2xl max-xl:py-14 max-xl:px-28 max-xl:rounded-none max-xl:gap-10 max-lg:px-14'>
                        <h2 className='text-violet-500 text-xl text-center font-mono font-bold drop-shadow-md pb-4 max-xl:text-2xl'>We want to know your thoughts!</h2>
                        <div className='w-full'>
                            <form action="" className='flex flex-col gap-5 max-xl:gap-10'>
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
                                <input type="submit" className='w-full bg-violet-500 h-12 rounded-full font-bold text-white drop-shadow-xl hover:bg-violet-600 active:bg-violet-700 max-xl:w-7/12 max-xl:self-center max-xl:h-14  max-md:w-9/12'/>
                            </form> 
                        </div>
                    </section>
                </section>


            </main>
        </>

    )
}

export default Feedback