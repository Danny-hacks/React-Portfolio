import React, { useState } from "react";
import "./portfolio.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import IMG1 from "../../assets/TaskManagementFIgma.png";
import IMG2 from "../../assets/WeRecycleFigma.png";
import IMG3 from "../../assets/portfolio1.png";
import IMG4 from "../../assets/portfolio2.png";
import IMG5 from "../../assets/portfolio3.PNG";
import IMG6 from "../../assets/portfolio4.png";
import IMG7 from "../../assets/HMT-Home.png";

// =====================
// Projects Data
// =====================
const cmsProjects = [
  {
    id: 1,
    image: IMG7,
    title: "Harel Mallac Technologies",
    description: "Official website built with WordPress & Thrive Architect.",
    technologies: ["WordPress", "Thrive Architect"],
    demo: "https://harelmallactechnologies.com/",
  },
];

const personalProjects = [
  {
    id: 1,
    image: IMG1,
    title: "Task Management Figma Design",
    description: "Mobile app UI design prototype in Figma.",
    technologies: ["Figma"],
    github:
      "https://www.figma.com/design/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=0-1&t=IXug0AaG1CUWEj3I-1",
    demo: "https://www.figma.com/proto/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=5-1974&p=f",
  },
  {
    id: 2,
    image: IMG2,
    title: "WeRecycle Figma Design",
    description: "UI design for a recycling app in Figma.",
    technologies: ["Figma"],
    github:
      "https://www.figma.com/design/bcbOfe60fmQu3JUCFDC5Ah/Recycling-UI-Design?node-id=0-1",
    demo: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:205d2c71-63ef-488b-abad-1efae3c498d8",
  },
  {
    id: 3,
    image: IMG3,
    title: "TodoList WebApp",
    description: "Simple todo list web app with JavaScript, HTML & CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/TodoList-WebApp",
    demo: "https://webapp-todolist.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Color Generator App",
    description: "React app for generating color palettes.",
    technologies: ["React", "CSS"],
    github: "https://github.com/Danny-hacks/Color-Generator",
    demo: "https://colour-finder.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Javascript Counter",
    description: "Basic counter app with JavaScript, HTML & CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Javascript-Counter",
    demo: "https://js-counter-demo.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Background Color Flipper",
    description: "Random background color generator using JavaScript.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Background-Color-Flipper",
    demo: "https://bvckground-color-flipper.netlify.app",
  },
];

// =====================
// Pagination Setup
// =====================
const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const [cmsPage, setCmsPage] = useState(1);
  const [personalPage, setPersonalPage] = useState(1);

  const cmsTotalPages = Math.ceil(cmsProjects.length / ITEMS_PER_PAGE);
  const personalTotalPages = Math.ceil(
    personalProjects.length / ITEMS_PER_PAGE
  );

  const displayedCmsProjects = cmsProjects.slice(
    (cmsPage - 1) * ITEMS_PER_PAGE,
    cmsPage * ITEMS_PER_PAGE
  );

  const displayedPersonalProjects = personalProjects.slice(
    (personalPage - 1) * ITEMS_PER_PAGE,
    personalPage * ITEMS_PER_PAGE
  );

  const renderPagination = (totalPages, currentPage, setPage) => (
    <div className='portfolio_pagination'>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`pagination_btn ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  const renderProjectCard = (project, isPersonal = true) => (
    <div className='portfolio_item' key={project.id}>
      <div className='portfolio_item-image'>
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className='portfolio_tech'>
        {project.technologies.map((tech, index) => (
          <span key={index} className='tech_name'>
            {tech}
          </span>
        ))}
      </div>

      <div className='portfolio_item-cta'>
        {isPersonal && project.github && (
          <a
            href={project.github}
            className='btn'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className='btn btn-primary'
            target='_blank'
            rel='noreferrer'
          >
            <FaExternalLinkAlt /> {isPersonal ? "Live Demo" : "View Site"}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      {/* CMS Projects */}
      <div className='portfolio_category'>
        <h3 className='text-primary'>CMS / Live Projects</h3>
        <div className='portfolio_container'>
          {displayedCmsProjects.map((project) =>
            renderProjectCard(project, false)
          )}
        </div>
        {cmsTotalPages > 1 &&
          renderPagination(cmsTotalPages, cmsPage, setCmsPage)}
      </div>

      {/* Personal Projects */}
      <div className='portfolio_category'>
        <h3 className='text-accent'>Personal / Side Projects</h3>
        <div className='portfolio_container'>
          {displayedPersonalProjects.map((project) =>
            renderProjectCard(project, true)
          )}
        </div>
        {personalTotalPages > 1 &&
          renderPagination(personalTotalPages, personalPage, setPersonalPage)}
      </div>
    </section>
  );
};

export default Portfolio;
