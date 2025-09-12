import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
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

          {/* Single CTA Button */}
          <div className='about_cta'>
            <a href='#portfolio' className='cta_primary'>
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
