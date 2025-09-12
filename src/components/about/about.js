import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  const profileData = {
    title: "Full Stack Developer",
    subtitle: "Crafting Digital Experiences",
    description: `I'm a passionate web developer and designer specializing in creating 
                 SEO-friendly websites using modern technologies. I build high-converting funnels 
                 and landing pages, customize themes and plugins, and handle CRM integrations, 
                 automation, tracking, and performance optimization to deliver exceptional digital experiences.`,
  };

  const techStack = [
    {
      title: "Frontend",
      skills: ["React", "Html", "Css", "Javascript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "Python", "MySQL"],
    },
    {
      title: "Tools & CMS",
      skills: ["WordPress", "Elementor", "WooCommerce", "GoHighLevel"],
    },
  ];

  const softSkills = [
    {
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      title: "Problem Solver",
      description:
        "Approaching complex challenges with creative and efficient solutions",
    },
    {
      title: "Team Player",
      description:
        "Collaborating effectively with designers, developers, and stakeholders",
    },
    {
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

          {/* Tech Stack Section */}
          <h3 className='section_header'>Technology Stack</h3>
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

          {/* Soft Skills Section */}
          <h3 className='section_header'>Soft Skills</h3>
          <div className='soft_skills_grid'>
            {softSkills.map((skill, index) => (
              <div key={index} className='soft_skill_card'>
                <h4 className='soft_skill_title'>{skill.title}</h4>
                <p className='soft_skill_desc'>{skill.description}</p>
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
      </div>
    </section>
  );
};

export default About;
