import React from 'react'
import FooterAreas from './FooterAreas'
import Letran from '../images/letran-logo.jpg'
import SCST from '../images/scst-logo.jpg'
import Rinna from '../images/rinna.png'
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className='bg-violet-600 px-24 py-16 h-96 flex justify-between items-center flex-row relative'>
        <section className='w-full flex justify-center flex-col items-start'>
          <h1 className='text-white tracking-custom-spacing-1 font-anton text-5xl mb-3 drop-shadow-xl'>PRINCY</h1>
          <p className='text-violet-950'>A model for introduction in artificial intelligence and <br />application programming interface</p>
        </section>
        <section className='h-full w-full flex flex-col items-center'>
          <h2 className='text-3xl text-white font-bold drop-shadow-lg'>Princy's Socials</h2>
          <article className='w-full h-full flex justify-center items-center'>
            <ul className='flex flex-col gap-3'>
              <FooterAreas 
                iconExist={true}
                icon={<FaFacebook className='text-2xl'/>}
                title="Princy AI"
              />
              <FooterAreas 
                iconExist={true}
                icon={<FaInstagram className='text-2xl'/>}
                title="Princy"
              />
              <FooterAreas 
                iconExist={true}
                icon={<FaXTwitter className='text-2xl'/>}
                title="PrincyRinnaAI"
              />
            </ul>
          </article>
        </section>
        <section className='h-full w-full flex items-center flex-col'>
          <h2 className='text-3xl font-bold text-white drop-shadow-lg'>Get to know more about them!</h2>
          <article className='h-full flex justify-center items-center w-full'>
            <ul className='w-auto flex flex-col gap-3'>
              <FooterAreas 
                imageExist={true}
                image={Letran}
                title='Colegio de San Juan de Letran Calamba'
                link='https://www.facebook.com/LetranCalambaOfficial'
              />
              <FooterAreas 
                imageExist={true}
                image={SCST}
                title="School of Computer Studies and Technology" 
                link='https://www.facebook.com/SCSTSCofficial'
              />
              <FooterAreas 
                imageExist={true}
                image={Rinna}
                title='Rinna Developers'
                link='https://developers.rinna.co.jp/'
              />
            </ul>
          </article>

        </section>

        <p className='absolute bottom-0 left-0 pl-24 bg-violet-800 w-full py-1 font-mono'>&#169; 2024 Princy Bot. All rights reserved.</p>



      </footer>
    </>
  )
}

export default Footer