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

// Split projects into CMS and Personal
const cmsProjects = [
  {
    id: 1,
    image: IMG7,
    title: "Harel Mallac Technologies",
    description: "Official website built with WordPress and Thrive Architect.",
    technologies: ["WordPress", "Thrive Architect"],
    liveDemo: "https://harelmallactechnologies.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Task Management Figma Design",
    description: "High fidelity prototype for a task management mobile app.",
    technologies: ["Figma"],
    liveDemo:
      "https://www.figma.com/proto/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=5-1974&p=f",
  },
  {
    id: 3,
    image: IMG2,
    title: "WeRecycle Figma Design",
    description: "Recycling app UI/UX design project on Figma.",
    technologies: ["Figma"],
    liveDemo:
      "https://acrobat.adobe.com/id/urn:aaid:sc:EU:205d2c71-63ef-488b-abad-1efae3c498d8",
  },
];

const personalProjects = [
  {
    id: 1,
    image: IMG3,
    title: "TodoList WebApp",
    description: "Simple to-do list app built with vanilla JavaScript.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/TodoList-WebApp",
    liveDemo: "https://webapp-todolist.netlify.app",
  },
  {
    id: 2,
    image: IMG4,
    title: "Color Generator App",
    description: "React app to generate random color palettes.",
    technologies: ["React", "CSS"],
    github: "https://github.com/Danny-hacks/Color-Generator",
    liveDemo: "https://colour-finder.netlify.app/",
  },
  {
    id: 3,
    image: IMG5,
    title: "JavaScript Counter",
    description: "Counter app with increment, decrement, and reset features.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Javascript-Counter",
    liveDemo: "https://js-counter-demo.netlify.app",
  },
  {
    id: 4,
    image: IMG6,
    title: "Background Color Flipper",
    description: "Random background color generator built with JavaScript.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Danny-hacks/Background-Color-Flipper",
    liveDemo: "https://bvckground-color-flipper.netlify.app",
  },
];

const ITEMS_PER_PAGE = 3; // easier to manage two columns

const PortfolioCategory = ({ projects, isCMS }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const displayedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className='portfolio_category'>
      <div className='portfolio_container'>
        {displayedProjects.map(
          ({
            id,
            image,
            title,
            description,
            technologies,
            github,
            liveDemo,
          }) => (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className='portfolio_tech'>
                {technologies.map((tech, index) => (
                  <span key={index} className='tech_name'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='portfolio_item-cta'>
                {isCMS && liveDemo && (
                  <a
                    href={liveDemo}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaExternalLinkAlt /> View Site
                  </a>
                )}
                {!isCMS && (
                  <>
                    {github && (
                      <a
                        href={github}
                        className='btn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {liveDemo && (
                      <a
                        href={liveDemo}
                        className='btn btn-primary'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </>
                )}
              </div>
            </article>
          )
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <h3 className='portfolio_category_title'>CMS & Live Projects</h3>
      <PortfolioCategory projects={cmsProjects} isCMS={true} />

      <h3 className='portfolio_category_title'>Personal / Side Projects</h3>
      <PortfolioCategory projects={personalProjects} isCMS={false} />
    </section>
  );
};

export default Portfolio;
