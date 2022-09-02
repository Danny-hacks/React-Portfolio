import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Working websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>100% responsive.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Bring design concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Colaborate with teams.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Edit website templates.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Optimized user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Precise figma design integrations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Bring design concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Optimized user interface.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Site Maintenance</h3>
          </div>
          
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fixing bugs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Track and control changes to site source code.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services