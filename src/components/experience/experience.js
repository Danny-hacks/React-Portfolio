import React from "react";
import "./experience.css";

const Experience = () => {
  // 🔧 SUPER EASY TO UPDATE: Just add/remove technologies from these arrays
  const techStack = {
    frontend: {
      title: "Frontend Development",
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

  // 📊 EASY TO UPDATE: Modify these stats as needed
  const experienceStats = [
    { number: "25+", label: "Technologies" },
    { number: "100+", label: "Projects Built" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
  ];

  return (
    <section id='experience'>
      <h5>What Technologies I Use</h5>
      <h2>My Technology Stack</h2>

      <div className='container tech_stack_container'>
        <div className='tech_stack_intro'>
          <p className='tech_stack_subtitle'>
            Building Modern Digital Solutions
          </p>
          <p className='tech_stack_description'>
            I work with cutting-edge technologies and tools to create
            exceptional web experiences, from responsive frontends to robust
            backends and powerful CMS solutions.
          </p>
        </div>

        <div className='tech_categories'>
          {Object.entries(techStack).map(([key, category], categoryIndex) => (
            <div key={key} className='tech_category floating_tech'>
              <div className='tech_category_header'>
                <h3 className='tech_category_title'>{category.title}</h3>
              </div>

              <div className='tech_stack_grid'>
                {category.technologies.map((tech, techIndex) => (
                  <div key={`${key}-${techIndex}`} className='tech_item'>
                    <div className='tech_item_name'>{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className='tech_stats'>
          {experienceStats.map((stat, index) => (
            <div key={index} className='tech_stat'>
              <span className='tech_stat_number'>{stat.number}</span>
              <span className='tech_stat_label'>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
