import React from "react";
import "./experience.css";

const Experience = () => {
  const techStack = [
    {
      title: "Frontend",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SASS/SCSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend & Database",
      technologies: [
        "Node.js",
        "PHP",
        "Java",
        "Python",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "CMS & Tools",
      technologies: [
        "WordPress",
        "Elementor",
        "WooCommerce",
        "GoHighLevel",
        "Shopify",
        "Git",
        "Docker",
        "AWS",
      ],
    },
  ];

  return (
    <section id='experience'>
      <h5>What I Work With</h5>
      <h2>Technology Stack</h2>

      <div className='container experience_container'>
        {techStack.map((category, index) => (
          <div key={index} className='experience_card'>
            <h3 className='experience_title'>{category.title}</h3>
            <div className='experience_content'>
              {category.technologies.map((tech, idx) => (
                <span key={idx} className='experience_item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='experience_cta'>
        <a href='#portfolio' className='btn_gradient'>
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Experience;
