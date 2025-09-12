import React, { useEffect, useState } from "react";
import "./header.css";
import Cta from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./headerSocials";

const Header = () => {
  const [greetingVisible, setGreetingVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [greetingFinished, setGreetingFinished] = useState(false);
  const [nameFinished, setNameFinished] = useState(false);

  useEffect(() => {
    // Start greeting animation after initial delay
    const greetingTimer = setTimeout(() => {
      setGreetingVisible(true);
    }, 500);

    // Start name animation after greeting
    const nameTimer = setTimeout(() => {
      setGreetingFinished(true);
      setNameVisible(true);
    }, 2500);

    // Start title animation after name
    const titleTimer = setTimeout(() => {
      setNameFinished(true);
      setTitleVisible(true);
    }, 5000);

    return () => {
      clearTimeout(greetingTimer);
      clearTimeout(nameTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <header>
      <div className='container header_container'>
        <h5
          className={`typewriter-line greeting ${
            greetingVisible ? "typing" : ""
          } ${greetingFinished ? "finished" : ""}`}
        >
          Hello, I'm
        </h5>

        <h1
          className={`typewriter-line name ${nameVisible ? "typing" : ""} ${
            nameFinished ? "finished" : ""
          }`}
        >
          Daniel Obiefule
        </h1>

        <h5
          className={`text-light typewriter-line title ${
            titleVisible ? "typing" : ""
          }`}
        >
          Software Engineer - Web Developer
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
