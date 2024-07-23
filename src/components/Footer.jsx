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
      <footer className='bg-violet-600 px-24 py-24 h-auto  relative grid grid-cols-3 gap-5 auto-cols-auto max-xl:grid-cols-2 max-xl:gap-9 max-md:grid-cols-1 max-md:gap-11'>
        <section className='w-full flex-grow-0 flex justify-center flex-col items-start gap-3 max-md:items-center'>
          <h1 className='text-white tracking-custom-spacing-1 font-anton text-5xl drop-shadow-xl'>PRINCY</h1>
          <p className='text-violet-950 max-md:text-center'>A model for introduction in artificial intelligence and application programming interface</p>
        </section>
        <section className='h-full w-full flex flex-col items-center gap-3'>
          <h2 className='text-2xl text-white font-bold drop-shadow-lg'>Princy's Socials</h2>
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
        <section className='h-full w-full flex items-center flex-col gap-3 max-xl:col-span-2 max-xl:items-start max-md:col-span-1 max-md:items-center'>
          <h2 className='text-2xl font-bold text-white drop-shadow-lg'>Know more about them!</h2>
          <article className='h-full flex justify-center items-center w-full max-xl:justify-normal max-md:justify-center'>
            <ul className='w-auto flex flex-col gap-6 max-xl:items-start'>
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

        <p className='absolute bottom-0 left-0 pl-24 bg-violet-800 w-full py-1 font-mono max-lg:text-sm max-lg:text-center max-lg:p-0'>&#169; 2024 Princy Bot. All rights reserved.</p>



      </footer>
    </>
  )
}

export default Footer