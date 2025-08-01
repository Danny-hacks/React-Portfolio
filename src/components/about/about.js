import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='about Image' />
          </div>
        </div>
        <div className='about_content'>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>Web Design</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>Multiple Clients</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Projects</h5>
            <small>Various Projects</small>
          </article>

          <p>
            I'm a software engineer specializing in front-end development and
            web design. I build SEO-friendly websites using WordPress,
            Elementor, and WooCommerce, and design high-converting funnels and
            landing pages with tools like Go High Level. With intermediate PHP
            skills, I customize WordPress themes and plugins to meet client
            needs. I also set up automated email sequences, CRM integrations,
            Google Analytics, conversion tracking, and third-party tools. I
            focus on page speed, SEO best practices, and resolving technical
            issues to deliver thoughtful, performance-driven solutions.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
