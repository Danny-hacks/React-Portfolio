import React, { useState } from "react";
import "./portfolio.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaFigma,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import IMG1 from "../../assets/TaskManagementFIgma.png";
import IMG2 from "../../assets/WeRecycleFigma.png";
import IMG3 from "../../assets/portfolio1.png";
import IMG4 from "../../assets/portfolio2.png";
import IMG5 from "../../assets/portfolio3.PNG";
import IMG6 from "../../assets/portfolio4.png";
import IMG7 from "../../assets/portfolio6.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Task Management Figma Design",
    technologies: ["Figma"],
    github:
      "https://www.figma.com/design/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=0-1&t=IXug0AaG1CUWEj3I-1",
    demo: "https://www.figma.com/proto/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=5-1974&p=f",
  },
  {
    id: 2,
    image: IMG2,
    title: "WeRecycle Figma Design",
    technologies: ["Figma"],
    github:
      "https://www.figma.com/design/bcbOfe60fmQu3JUCFDC5Ah/Recycling-UI-Design?node-id=0-1",
    demo: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:205d2c71-63ef-488b-abad-1efae3c498d8",
  },
  {
    id: 3,
    image: IMG3,
    title: "TodoList WebApp",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/TodoList-WebApp",
    demo: "https://webapp-todolist.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Color Generator App",
    technologies: ["React", "CSS"],
    github: "https://github.com/Danny-hacks/Color-Generator",
    demo: "https://colour-finder.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Javascript Counter",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Javascript-Counter",
    demo: "https://js-counter-demo.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Background Color Flipper",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Background-Color-Flipper",
    demo: "https://bvckground-color-flipper.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Simple Portfolio Website",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/portfolio_task",
    demo: "https://simple-port-website.netlify.app/",
  },
];

const techIcons = {
  Figma: <FaFigma />,
  React: <FaReact />,
  JavaScript: <FaJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
};

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const displayedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {displayedProjects.map(
          ({ id, image, title, github, demo, technologies }) => (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className='portfolio_tech'>
                {technologies.map((tech, index) => (
                  <span key={index} className='tech_icon'>
                    {techIcons[tech]} <small>{tech}</small>
                  </span>
                ))}
              </div>

              <div className='portfolio_item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </article>
          )
        )}
      </div>

      {/* Pagination Controls */}
      <div className='portfolio_pagination'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`pagination_btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
