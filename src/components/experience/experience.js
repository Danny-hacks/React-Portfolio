import React from "react";
import "./experience.css";

const Experience = () => {
  const techStack = {
    tools: {
      title: "CMS & Tools",
      color: "var(--color-primary)",
      technologies: [
        "WordPress",
        "Elementor",
        "WooCommerce",
        "GoHighLevel",
        "Git",
      ],
    },

    frontend: {
      title: "Frontend",
      color: "var(--color-primary)",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    },

    backend: {
      title: "Backend",
      color: "var(--color-primary)",
      technologies: [
        "Node.js",
        "PHP",
        "Java",
        "Python",
        "MySQL",
        "MongoDB",
        "REST APIs",
      ],
    },

    itSupport: {
      title: "IT Support & Networking",
      color: "var(--color-primary)",
      technologies: [
        "Troubleshooting",
        "Windows OS",
        "Active Directory",
        "Firewalls & Security",
        "Sophos Firewall",
        "Hardware/Software Troubleshooting",
        "Remote Assistance",
        "Help Desk Support",
        "System Monitoring & Alerts",
      ],
    },
  };

  return (
    <section className='experience' id='experience'>
      <h5>What I Work With</h5>
      <h2>Technology Stack & Experience</h2>

      <div className='container tech_stack_container'>
        <div className='tech_categories'>
          {Object.entries(techStack).map(([key, category]) => (
            <div
              key={key}
              className='tech_card'
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

        {/* CTA
        <div className='tech_cta_container'>
          <a href='#portfolio' className='btn-primary'>
            View Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
