import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BsGrid} from 'react-icons/bs';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState, useEffect } from 'react';


const navItems = [
  { href: "#home", id: "home", label: "Home", icon: <AiOutlineHome /> },
  { href: "#about", id: "about", label: "About", icon: <AiOutlineUser /> },
  { href: "#experience", id: "experience", label: "Skills", icon: <BiBook /> },
  { href: "#services", id: "services", label: "Services", icon: <RiServiceLine /> },
  { href: "#portfolio", id: "portfolio", label: "Work", icon: <BsGrid /> },
  { href: "#contact", id: "contact", label: "Contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setActiveNav(item.href)}
          className={activeNav === item.href ? "active" : ""}
          aria-label={item.label}
        >
          {item.icon}
          <span className='nav_label'>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav
