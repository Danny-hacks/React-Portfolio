import React from 'react'
import './header.css';
import Cta from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Daniel Obiefule</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <Cta/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll to Bottom</a>
      </div>

    </header>
  )
}

export default header