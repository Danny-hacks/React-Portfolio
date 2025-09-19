import React from "react";
import "./experience.css";

const Experience = () => {
  const techStack = {
    frontend: {
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
    backend: {
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
    tools: {
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
  };

  return (
    <section id='experience'>
      <h5>What I Work With</h5>
      <h2>Technology Stack</h2>

      <div className='container tech_stack_container'>
        <div className='tech_stack_intro'>
          <p className='tech_stack_description'>
            I use modern technologies and frameworks to build fast, scalable,
            and user-friendly digital experiences. Here’s a snapshot of the
            tools I work with.
          </p>
        </div>

        <div className='tech_categories'>
          {Object.entries(techStack).map(([key, category]) => (
            <div key={key} className='tech_category'>
              <h3 className='tech_category_title'>{category.title}</h3>
              <div className='tech_stack_grid'>
                {category.technologies.map((tech, index) => (
                  <span key={index} className='tech_pill'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
