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

  const techStack = [
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "Python", "MySQL"],
    },
    {
      title: "Tools & CMS",
      skills: ["WordPress", "Elementor", "WooCommerce", "GoHighLevel"],
    },
    {
      title: "IT Support",
      skills: [
        "Troubleshooting",
        "Network Setup",
        "Hardware Maintenance",
        "System Security",
      ],
    },
  ];

  const softSkills = [
    {
      icon: <FaLaptopCode className='soft_skill_icon' />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code that stands the test of time",
    },
    {
      icon: <FaLightbulb className='soft_skill_icon' />,
      title: "Problem Solver",
      description:
        "Solving complex challenges with creative and efficient solutions",
    },
    {
      icon: <FaUsers className='soft_skill_icon' />,
      title: "Team Player",
      description:
        "Collaborating effectively with designers, developers, and stakeholders",
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

          {/* Soft Skills Boxes directly under the summary */}
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

      {/* Technology Stack Section */}
      <div className='container tech_stack_section'>
        <h3 className='section_header'>Technology Stack & IT Support</h3>
        <div className='skills_grid'>
          {techStack.map((category, index) => (
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

        {/* CTA Button */}
        <div className='about_cta'>
          <a href='#portfolio' className='cta_primary'>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
