import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/TaskManagementFigma.png";
import IMG2 from "../../assets/WeRecycleFigma.png";
import IMG3 from "../../assets/portfolio1.png";
import IMG4 from "../../assets/portfolio2.png";
import IMG5 from "../../assets/portfolio3.PNG";
import IMG6 from "../../assets/portfolio4.png";
import IMG7 from "../../assets/portfolio5.png";
import IMG8 from "../../assets/portfolio6.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Task Management Figma Design",
    github:
      "https://www.figma.com/design/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=0-1&t=IXug0AaG1CUWEj3I-1",
    demo: "https://www.figma.com/proto/9fDYFK9y2OcAnigBzIFU7n/Task-Management-Mobile-App?node-id=5-1974&p=f&t=nxaBdE0Ajeqo5yfG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A1974",
  },
  {
    id: 2,
    image: IMG1,
    title: "WeRecycle Figma Design",
    github:
      "https://www.figma.com/design/bcbOfe60fmQu3JUCFDC5Ah/Recycling-UI-Design?node-id=0-1&t=xq8snhLjWP6j7A6U-1",
    demo: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:205d2c71-63ef-488b-abad-1efae3c498d8",
  },
  {
    id: 3,
    image: IMG1,
    title: "TodoList WebApp",
    github: "https://github.com/Danny-hacks/TodoList-WebApp",
    demo: "https://webapp-todolist.netlify.app",
  },
  {
    id: 4,
    image: IMG2,
    title: "Color Generator App",
    github: "https://github.com/Danny-hacks/Color-Generator",
    demo: "https://colour-finder.netlify.app/",
  },
  {
    id: 5,
    image: IMG3,
    title: "Javascript Counter",
    github: "https://github.com/Danny-hacks/Javascript-Counter",
    demo: " https://js-counter-demo.netlify.app",
  },
  {
    id: 6,
    image: IMG4,
    title: "Background Color Flipper",
    github: "https://github.com/Danny-hacks/Background-Color-Flipper",
    demo: "https://bvckground-color-flipper.netlify.app",
  },
  {
    id: 7,
    image: IMG5,
    title: "Responsive Landing Page",
    github: "https://github.com/Danny-hacks/responsive-design",
    demo: "https://resp-design.netlify.app",
  },
  {
    id: 8,
    image: IMG6,
    title: "Simple Portfolio Website",
    github: "https://github.com/Danny-hacks/portfolio_task",
    demo: "https://simple-port-website.netlify.app/",
  },
];

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container'>
        <div className=' portfolio_container'>
          {projects.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>
                    View Project
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank'>
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <a
          href='https://app.netlify.com/teams/danny-hacks/sites'
          target='_blank'
          className='see_more btn btn-primary '
        >
          {" "}
          See More
        </a>
      </div>
    </section>
  );
};

export default portfolio;
