import React from "react";
import "./experience.css";

const Experience = () => {
  // Technology stack with color for each category
  const techStack = {
    frontend: {
      title: "Frontend",
      color: "var(--color-accent-frontend)",
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
      color: "var(--color-accent-backend)",
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
      color: "var(--color-accent-tools)",
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
    <section className='experience' id='experience'>
      <h5>What I Work With</h5>
      <h2>Technology Stack</h2>

      <div className='container tech_stack_container'>
        <div className='tech_categories'>
          {Object.entries(techStack).map(([key, category]) => (
            <div key={key} className='tech_card'>
              <h3 className='tech_category_title'>
                <span
                  className='category_dot'
                  style={{ backgroundColor: category.color }}
                ></span>
                {category.title}
              </h3>
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

        {/* CTA Button */}
        <div className='tech_cta_container'>
          <a href='#projects' className='view_projects_btn'>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
