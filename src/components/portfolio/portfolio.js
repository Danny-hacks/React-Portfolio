import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const projects = [
  {
    id: 1,
    image: IMG1,
    title: "TodoList WebApp",
    github: "https://github.com/Danny-hacks/TodoList-WebApp",
    demo: "https://webapp-todolist.netlify.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Color Generator App",
    github: "https://github.com/Danny-hacks/Color-Generator",
    demo: "https://colour-finder.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Javascript Counter",
    github: "https://github.com/Danny-hacks/Javascript-Counter",
    demo: " https://js-counter-demo.netlify.app"
  },
  {
    id: 4,
    image: IMG4,
    title: "Background Color Flipper",
    github: "https://github.com/Danny-hacks/Background-Color-Flipper",
    demo: "https://bvckground-color-flipper.netlify.app"
  },
  {
    id: 5,
    image: IMG5,
    title: "Responsive Landing Page",
    github: "https://github.com/Danny-hacks/responsive-design",
    demo: "https://resp-design.netlify.app"
  },
  {
    id: 6,
    image: IMG6,
    title: "Simple Portfolio Website",
    github: "https://github.com/Danny-hacks/portfolio_task",
    demo: "https://simple-port-website.netlify.app/"
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container">
      <div className=" portfolio_container">
        {
          projects.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn'>View on Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Site</a>
              </div>
            </article>
            )
          })
        }
        </div>
        <a href="https://app.netlify.com/teams/danny-hacks/sites" target="_blank" className='see_more btn btn-primary '> See More</a>
      </div>
    </section>
  )
}

export default portfolio