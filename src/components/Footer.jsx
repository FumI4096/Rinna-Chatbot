import React from 'react'
import FooterAreas from './FooterAreas'
import Letran from '../images/letran-logo.jpg'
import SCST from '../images/scst-logo.jpg'
import Rinna from '../images/rinna.png'
// import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className='bg-violet-500 px-24 py-16 h-80 flex justify-between items-center flex-row relative'>
        <section className='w-full flex justify-center flex-col items-start'>
          
          <h1 className='font-anton text-5xl'>PRINCY</h1>
          <p>A model for introduction in artificial intelligence and <br />application programming interface</p>
        </section>
        <section className='h-full w-full flex justify-center items-center flex-col'>
          <h2>Get to know more about them!</h2>
          <article>
            <ul className='w-full flex flex-col gap-3'>
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

        <p className='absolute bottom-0 left-0 pl-24 bg-violet-700 w-full py-1 font-mono'>&#169; 2024 Princy Bot. All rights reserved.</p>



      </footer>
    </>
  )
}

export default Footer