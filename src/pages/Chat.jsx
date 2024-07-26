import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import Griffin from '../images/Griffin2.png'
import Profile from '../images/Profile.jpg'

function App() {
    const [message, setMessage] = useState('');
    const [dialogHistory, setDialogHistory] = useState([]);

    const handleSubmit = async () => {
        try{
            const response = await fetch('http://localhost:3001/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, dialogHistory })
            });

            const text = await response.text();
            console.log('Response text:', text);

            const responseData = JSON.parse(text);
            setDialogHistory(responseData.dialogHistory);
        } 
        catch(error){
            console.error('Error:', error);
        }
    };

    return (
        <main className='bg-violet-900 h-[831px] flex justify-center items-center py-20 px-24 max-xl:px-24 max-md:px-8 max-md:py-10 max-md:h-auto'>
            <article className='flex items-center flex-col-reverse w-full h-full bg-gray-custom-4 p-4 gap-3 rounded-lg'>
                <section className='w-full flex h-auto gap-3 max-md:flex-col'>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='basis-full h-14 rounded-xl bg-gray-custom-5 outline-none px-3 text-white max-md:basis-16'
                    />
                    <button onClick={handleSubmit} className='bg-violet-500 w-24 rounded-xl grid place-content-center text-2xl text-white max-md:w-full max-md:basis-14'><IoMdSend /></button>
                </section>

                <ul className='h-[570px] w-full bg-gray-custom-5 rounded-xl p-6 flex flex-col overflow-y-auto gap-5 max-md:h-[700px]'>
                    {dialogHistory.map((item, index) => (
                        <li className='h-auto w-[50%] flex items-center gap-2 even:self-start odd:self-end odd:flex-row-reverse first:mt-auto max-xl:w-full' key={index}>
                            <img 
                                src={(index % 2 !== 0) ? Griffin : Profile} 
                                alt={(index % 2 !== 0) ? 'even' : 'odd'} 
                                className='rounded-full h-12'
                            />
                            <p className={`break-words max-w-[100%] max-xl:max-w-[80%] px-6 py-3 rounded-3xl text-left ${(index % 2 !== 0) ? 'bg-white' : 'bg-violet-500'}`}>{item}</p>
                        
                        </li>
                    ))}
                </ul>
            </article>

        </main>
    );
}

export default App;