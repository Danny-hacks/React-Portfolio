import React from "react";
import "./header.css";
import Cta from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./headerSocials";
import Typewriter from "./Typewriter";

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I'm</h5>
        <h1 className='fade-in'>Daniel Obiefule</h1>
        <h5 className='text-light'>
          <Typewriter text='Software Engineer - Web Developer' />
        </h5>
        <Cta />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>
          Scroll to Bottom
        </a>
      </div>
    </header>
  );
};

export default Header;
