import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaLaptopCode, FaLightbulb, FaUsers, FaBolt } from "react-icons/fa";

const About = () => {
  const profileData = {
    title: "Web Developer",
    subtitle: "Crafting Digital Experiences",
    description: `I'm a passionate web developer and designer specializing in creating 
                 SEO-friendly websites using modern technologies. I build high-converting funnels 
                 and landing pages, customize themes and plugins, and handle CRM integrations, 
                 automation, tracking, and performance optimization to deliver exceptional digital experiences.`,
  };

  const softSkills = [
    {
      icon: <FaUsers className='soft_skill_icon' />,
      title: "Team Player",
      description:
        "Working closely with cross-functional teams to build and ship successful products.",
    },
    {
      icon: <FaBolt className='soft_skill_icon' />,
      title: "Fast Learner",
      description:
        "Quickly adapting to new technologies and industry best practices",
    },
  ];

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        {/* Profile Section */}
        <div className='about_profile'>
          <div className='about_image_wrapper'>
            <div className='about_image_container'>
              <div className='about_me-image'>
                <img src={ME} alt='Daniel Obiefule' />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='about_content'>
          <div className='about_header'>
            <h3 className='about_title'>{profileData.title}</h3>
            <p className='about_subtitle'>{profileData.subtitle}</p>
          </div>

          <p className='about_description'>{profileData.description}</p>

          {/* Soft Skills Grid */}
          <div className='soft_skills_grid'>
            {softSkills.map((skill, index) => (
              <div key={index} className='soft_skill_card'>
                <div className='soft_skill_icon_wrapper'>{skill.icon}</div>
                <h4 className='soft_skill_title'>{skill.title}</h4>
                <p className='soft_skill_desc'>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
