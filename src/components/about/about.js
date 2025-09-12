import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward, FaCode, FaRocket } from "react-icons/fa";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiOutlineLocationMarker } from "react-icons/hi";

const About = () => {
  // Easy to update data structure
  const profileData = {
    title: "Full Stack Developer",
    subtitle: "Crafting Digital Experiences",
    description: `I'm a passionate full-stack developer and web designer specializing in creating 
                 SEO-friendly websites using modern technologies. I build high-converting funnels 
                 and landing pages, customize themes and plugins, and handle CRM integrations, 
                 automation, tracking, and performance optimization to deliver exceptional digital experiences.`,
  };

  const stats = [
    {
      icon: <FaAward className='stat_icon' />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <FiUsers className='stat_icon' />,
      number: "50+",
      label: "Happy Clients",
    },
    {
      icon: <VscFolderLibrary className='stat_icon' />,
      number: "100+",
      label: "Projects Completed",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SASS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "Python", "MongoDB", "MySQL"],
    },
    {
      title: "Tools & CMS",
      skills: ["WordPress", "Elementor", "WooCommerce", "GoHighLevel"],
    },
  ];

  const floatingElements = [
    {
      icon: <HiOutlineLocationMarker className='floating_element_icon' />,
      text: "Based in Nigeria",
    },
    {
      icon: <FiTrendingUp className='floating_element_icon' />,
      text: "Always Learning",
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

            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <div
                key={index}
                className={`about_floating_element floating_element_${
                  index + 1
                }`}
              >
                <div className='floating_element_content'>
                  {element.icon}
                  <span>{element.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className='about_stats'>
            {stats.map((stat, index) => (
              <article key={index} className='stat_card'>
                {stat.icon}
                <div className='stat_number'>{stat.number}</div>
                <div className='stat_label'>{stat.label}</div>
              </article>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className='about_content'>
          <div className='about_header'>
            <h3 className='about_title'>{profileData.title}</h3>
            <p className='about_subtitle'>{profileData.subtitle}</p>
          </div>

          <p className='about_description'>{profileData.description}</p>

          {/* Skills Grid */}
          <div className='skills_grid'>
            {skillCategories.map((category, index) => (
              <div key={index} className='skill_category'>
                <h4 className='skill_category_title'>{category.title}</h4>
                <div className='skill_list'>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className='skill_tag'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='about_cta'>
            <a href='#contact' className='cta_primary'>
              Let's Work Together
            </a>
            <a href='#portfolio' className='cta_secondary'>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
