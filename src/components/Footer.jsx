import React from 'react'
import FooterAreas from './FooterAreas'

function Footer() {
  return (
    <>
      <h2>Get to know more about them!</h2>
      <footer>
        <FooterAreas 
          title='Colegio de San Juan de Letran Calamba'
          link='https://www.facebook.com/LetranCalambaOfficial'
        />
        <FooterAreas 
          title='School of Computer Studies and Technology'
          link='https://www.facebook.com/SCSTSCofficial'
        />
        <FooterAreas 
          title='Rinna Developers'
          link='https://developers.rinna.co.jp/'
        />


      </footer>
    </>
  )
}

export default Footer