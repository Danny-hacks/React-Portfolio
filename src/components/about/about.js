import React from 'react'
import ME from '../../assets/me-about.JPG';
import './about.css';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>2019 - till date</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>Worked With Multiple Clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>Completed Multiple Projects </small>
            </article>
          </div>

          <p>A frontend dev who is able to jump into different roles.
          Relate well to people of all backgrounds, pick up new skills
          quickly, and seek every opportunity to make lasting impacts.
          Good time management skills with a strong capacity to
          multi-task and prioritize work. Known for my hardworking
          ethic and exceptional people skills.            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about