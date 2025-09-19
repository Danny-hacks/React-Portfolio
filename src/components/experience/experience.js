import React from "react";
import "./experience.css";

const Experience = () => {
  const techStack = [
    {
      key: "frontend",
      title: "Frontend",
      color: "var(--color-accent-frontend)", // easy to manage colors
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Tailwind CSS",
        "SASS",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
      ],
    },
    {
      key: "backend",
      title: "Backend",
      color: "var(--color-accent-backend)",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      key: "tools",
      title: "Tools & Technologies",
      color: "var(--color-accent-tools)",
      technologies: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Jest",
        "Cypress",
        "Webpack",
        "Vite",
      ],
    },
    {
      key: "design",
      title: "Design & UX",
      color: "var(--color-accent-design)",
      technologies: [
        "Figma",
        "Adobe XD",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Design Systems",
        "Prototyping",
        "User Testing",
      ],
    },
    {
      key: "support",
      title: "IT Support",
      color: "var(--color-accent-support)",
      technologies: [
        "Windows Server",
        "Linux Administration",
        "Active Directory",
        "Network Troubleshooting",
        "Hardware Diagnostics",
        "Remote Support",
        "Help Desk",
        "System Monitoring",
      ],
    },
  ];

  return (
    <section id='experience' className='experience'>
      <h5>What I Work With</h5>
      <h2>Technology Stack</h2>

      <div className='container tech_stack_container'>
        <div className='tech_categories'>
          {techStack.map((category) => (
            <div key={category.key} className='tech_card'>
              <h3 className='tech_category_title'>
                <span
                  className='category_dot'
                  style={{ backgroundColor: category.color }}
                ></span>
                {category.title}
              </h3>
              <div className='tech_stack_grid'>
                {category.technologies.map((tech, i) => (
                  <span key={i} className='tech_pill'>
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
