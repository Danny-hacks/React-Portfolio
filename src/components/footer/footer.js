import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        Daniel Obiefule
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_socials'>
        {/* <a href="https://twitter.com"><IoLogoTwitter/></a> */}
        <a
          href='https://www.linkedin.com/in/daniel-obiefule-2a13381a3/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; {new Date().getFullYear()} Daniel Obiefule. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
