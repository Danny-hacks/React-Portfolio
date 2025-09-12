import React, { useState, useEffect } from "react";
import "./header.css";
import Cta from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./headerSocials";

const Header = () => {
  const lines = [
    "Hello, I'm",
    "Daniel Obiefule",
    "Software Engineer - Web Developer",
  ];
  const [currentText, setCurrentText] = useState(["", "", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          const updatedText = [...currentText];
          updatedText[lineIndex] += lines[lineIndex][charIndex];
          setCurrentText(updatedText);
          setCharIndex(charIndex + 1);
        }, 120); // typing speed
        return () => clearTimeout(timeout);
      } else {
        // pause before typing next line
        const pause = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 700); // pause after line finished
        return () => clearTimeout(pause);
      }
    }
  }, [charIndex, lineIndex, lines, currentText]);

  return (
    <header>
      <div className='container header_container'>
        <h5 className='typewriter'>{currentText[0]}</h5>
        <h1 className='typewriter'>{currentText[1]}</h1>
        <h5 className='text-light typewriter'>{currentText[2]}</h5>

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
