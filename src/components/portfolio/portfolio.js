import React, { useState, useRef } from "react";
import "./portfolio.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import IMG1 from "../../assets/TaskManagementFIgma.png";
import IMG2 from "../../assets/WeRecycleFigma.png";
import IMG3 from "../../assets/portfolio1.png";
import IMG4 from "../../assets/portfolio2.png";
import IMG7 from "../../assets/HMT-Home.png";
import IMG8 from "../../assets/SaffCoaching-preview.png";
import IMG9 from "../../assets/RobustRoast-preview.png";
import IMG10 from "../../assets/MyWheelOfLuck-preview.png";
import IMG11 from "../../assets/LMC-preview.png";
import IMG12 from "../../assets/Mauriexcursion-preview.png";
import IMG13 from "../../assets/TheSoccerFramework-preview.png";
import IMG14 from "../../assets/JamieLandreman-preview.png";
import IMG15 from "../../assets/FillinMauritius-preview.jpg";
import IMG16 from "../../assets/ArtemisCascavelle-preview.jpg";
import IMG17 from "../../assets/ArtemisMauritius-preview.jpg";
import IMG18 from "../../assets/PrimePillar-preview.jpg";
import IMG19 from "../../assets/TheFaceClinic-preview.jpg";
import IMG20 from "../../assets/BeyondProperty-preview.jpg";
import IMG21 from "../../assets/Guipin-preview.jpg";

// =====================
// Projects Data
// =====================
const cmsProjects = [
  {
    id: 1,
    image: IMG15,
    title: "Fillin Mauritius",
    description:
      "Fillin (formerly Engen Mauritius) is the corporate site for the nationwide fuel retail network, rebuilt for the company's rebrand. Includes a custom-built station locator (searchable, filterable by region and services) beyond what Elementor alone provides.",
    technologies: ["WordPress", "Elementor", "Custom PHP/JS", "English/French Translation"],
    demo: "https://fillin.mu/",
  },
  {
    id: 2,
    image: IMG16,
    title: "Artemis Cascavelle Hospital",
    description:
      "Hospital website for Artemis Cascavelle, part of the Falcon Healthcare Group. Covers services, doctors, and international patient info with online appointment booking.",
    technologies: ["WordPress", "Elementor"],
    demo: "https://cascavelle.artemismauritius.mu/",
  },
  {
    id: 3,
    image: IMG17,
    title: "Artemis Hospitals Mauritius",
    description:
      "Group landing page unifying Artemis Hospitals Mauritius' hospital sites (Cascavelle & Curepipe) under one branded entry point.",
    technologies: ["WordPress", "Elementor"],
    demo: "https://artemismauritius.mu/",
  },
  {
    id: 4,
    image: IMG18,
    title: "Prime Pillar Group",
    description:
      "Real estate agency site for Prime Pillar Group, with property search and filtering, valuations, and advisory services for Mauritius luxury real estate.",
    technologies: ["WordPress", "Elementor", "Property Listings", "English/French Translation"],
    demo: "https://primepillar.net/",
  },
  {
    id: 5,
    image: IMG19,
    title: "The Face Clinic",
    description:
      "Website for The Face Clinic, a non-surgical aesthetic clinic, with treatment menus, online booking, and patient concierge info.",
    technologies: ["WordPress", "Elementor", "English/French Translation"],
    demo: "https://thefaceclinic.mu/",
  },
  {
    id: 6,
    image: IMG20,
    title: "Beyond Property",
    description:
      "Property listings site for Beyond Property, with searchable/filterable listings and lead capture for rentals and sales.",
    technologies: ["WordPress", "Elementor", "Property Listings"],
    demo: "https://beyondproperty.mu/",
  },
  {
    id: 7,
    image: IMG21,
    title: "Guipin",
    description:
      "E-commerce store for Guipin's zero-sugar herbal drinks, built as a WooCommerce shop with product catalog and online ordering.",
    technologies: ["WordPress", "Elementor", "WooCommerce"],
    demo: "https://guipin.mu/",
  },
  {
    id: 8,
    image: IMG7,
    title: "Harel Mallac Technologies",
    description:
      "Harel Mallac Technologies official site, crafted with WordPress & Thrive Architect for a clean and professional online presence.",
    technologies: ["WordPress", "Thrive Architect"],
    demo: "https://harelmallactechnologies.com/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Robust Roast",
    description:
      "HeatMaster Grill Mat Funnel – A high-converting sales funnel built on GoHighLevel to showcase and sell the reusable grill mat online.",
    technologies: ["GoHighLevel", "Funnels"],
    demo: "https://robustroast.com/grill-mat",
  },
  {
    id: 10,
    image: IMG10,
    title: "My Wheel Of Luck",
    description:
      "MyWheelOfLuck.com – Website built on GoHighLevel featuring interactive spin wheels to capture leads and boost user engagement.",
    technologies: ["GoHighLevel"],
    demo: "https://mywheelofluck.com",
  },
  {
    id: 11,
    image: IMG13,
    title: "The Soccer Framework",
    description:
      "High-converting GoHighLevel funnel for Riley Lynch's Soccer Framework, helping parents connect their kids with the expert-led soccer training program.",
    technologies: ["GoHighLevel", "Funnels", "Email Campaign & Automation"],
    demo: "https://soccerframework.com/elite",
  },
  {
    id: 12,
    image: IMG14,
    title: "Jamie Landreman",
    description:
      "Jamie Landreman – Professional GoHighLevel funnel for Jamie Landreman, designed to showcase services and help business owners scale with proven systems.",
    technologies: ["GoHighLevel", "Funnels", "Email Campaign & Automation"],
    demo: "https://jamielandreman.com/",
  },
  {
    id: 13,
    image: IMG8,
    title: "Saff Coaching Co",
    description:
      "Saff Coaching Co – Professional website designed for a leadership coach to highlight services and expertise.",
    technologies: ["WordPress", "Thrive Architect"],
    demo: "https://saffcoachingco.com/",
  },
  {
    id: 14,
    image: IMG11,
    title: "Labourdonnais Management Ltd",
    description:
      "Labourdonnais Management Ltd – A corporate website for a licensed management company in Mauritius, showcasing their services.",
    technologies: ["WordPress", "Thrive Architect"],
    demo: "https://www.lmcltd.mu/",
  },
  {
    id: 15,
    image: IMG12,
    title: "Mauriexcursion",
    description:
      "Mauriexcursion – A WordPress site built with Elementor, crafted to showcase Mauritius tours and provide a smooth booking experience.",
    technologies: ["WordPress", "Elementor"],
    demo: "https://mauriexcursion.com/",
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
];

// =====================
// Pagination Setup
// =====================
const ITEMS_PER_PAGE = 4;

// Builds a compact page list with ellipses, e.g. 1 ... 4 5 6 ... 12
const getPageNumbers = (current, total) => {
  const delta = 1;
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i);
    }
  }
  const withDots = [];
  let prev = 0;
  for (const p of pages) {
    if (prev && p - prev > 1) withDots.push("...");
    withDots.push(p);
    prev = p;
  }
  return withDots;
};

const Portfolio = () => {
  const [cmsPage, setCmsPage] = useState(1);
  const [personalPage, setPersonalPage] = useState(1);
  const cmsSectionRef = useRef(null);
  const personalSectionRef = useRef(null);

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

  const goToPage = (page, totalPages, setPage, sectionRef) => {
    const target = Math.min(Math.max(page, 1), totalPages);
    setPage(target);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderPagination = (totalPages, currentPage, setPage, sectionRef) => (
    <div className='portfolio_pagination'>
      <button
        className='pagination_btn pagination_nav'
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1, totalPages, setPage, sectionRef)}
        aria-label='Previous page'
      >
        ‹
      </button>

      {getPageNumbers(currentPage, totalPages).map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className='pagination_ellipsis'>
            …
          </span>
        ) : (
          <button
            key={p}
            className={`pagination_btn ${currentPage === p ? "active" : ""}`}
            onClick={() => goToPage(p, totalPages, setPage, sectionRef)}
          >
            {p}
          </button>
        )
      )}

      <button
        className='pagination_btn pagination_nav'
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1, totalPages, setPage, sectionRef)}
        aria-label='Next page'
      >
        ›
      </button>
    </div>
  );

  const renderProjectCard = (project, isPersonal = true) => (
    <div className='portfolio_item' key={project.id}>
      <div className='portfolio_item-image'>
        {isPersonal ? (
          <img src={project.image} alt={project.title} loading='lazy' />
        ) : (
          <a href={project.demo} target='_blank' rel='noreferrer'>
            <img src={project.image} alt={project.title} loading='lazy' />
          </a>
        )}
      </div>
      <h4>{project.title}</h4>
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
      <div className='container'>
        <h5>Recent Work</h5>
        <h2>Portfolio</h2>

        {/* CMS Projects */}
        <div className='portfolio_category' ref={cmsSectionRef}>
          <h3 className='text-primary'>Live Projects</h3>
          <div className='portfolio_container'>
            {displayedCmsProjects.map((project) =>
              renderProjectCard(project, false)
            )}
          </div>
          {cmsTotalPages > 1 &&
            renderPagination(cmsTotalPages, cmsPage, setCmsPage, cmsSectionRef)}
        </div>

        {/* Personal Projects */}
        <div className='portfolio_category' ref={personalSectionRef}>
          <h3 className='text-accent'>Personal Projects</h3>
          <div className='portfolio_container'>
            {displayedPersonalProjects.map((project) =>
              renderProjectCard(project, true)
            )}
          </div>
          {personalTotalPages > 1 &&
            renderPagination(
              personalTotalPages,
              personalPage,
              setPersonalPage,
              personalSectionRef
            )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
