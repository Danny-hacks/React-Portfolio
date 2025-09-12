import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const highlights = [
  {
    icon: <FaAward className='about_icon' />,
    title: "Experience",
    subtitle: "2019 - Present",
  },
  {
    icon: <FiUsers className='about_icon' />,
    title: "Clients",
    subtitle: "Worked With Multiple Clients",
  },
  {
    icon: <VscFolderLibrary className='about_icon' />,
    title: "Projects",
    subtitle: "Completed Multiple Projects",
  },
];

const About = () => {
  return (
    <section id='about'>
      <h5 className='section_subtitle'>Get To Know</h5>
      <h2 className='section_title'>About Me</h2>

      <div className='container about_container'>
        {/* IMAGE SIDE */}
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className='about_content'>
          <div className='about_highlights'>
            {highlights.map((item, index) => (
              <article key={index} className='about_card'>
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.subtitle}</small>
              </article>
            ))}
          </div>

          <p className='about_description'>
            I'm a front-end developer and web designer specializing in
            SEO-friendly websites using WordPress, Elementor, and WooCommerce. I
            build high-converting funnels and landing pages with GoHighLevel,
            customize themes and plugins with PHP, and handle CRM integrations,
            automation, tracking, and performance optimization.
          </p>

          <a href='#contact' className='btn btn-primary modern_btn'>
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
