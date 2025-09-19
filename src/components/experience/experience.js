import React from "react";
import "./experience.css";

const Experience = () => {
  const techStack = {
    frontend: {
      title: "Frontend",
      color: "var(--color-primary)",
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
      color: "var(--color-primary-variant)",
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
      color: "var(--body-bg-variant)",
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
            <div
              key={key}
              className='tech_card floating-glow'
              style={{ borderColor: category.color }}
            >
              <h3 className='tech_category_title'>
                <span
                  className='category_dot'
                  style={{ backgroundColor: category.color }}
                ></span>
                {category.title}
              </h3>
              <div className='tech_stack_grid'>
                {category.technologies.map((tech, idx) => (
                  <span key={idx} className='tech_pill'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='tech_cta_container'>
          <a href='#projects' className='btn btn-primary'>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
