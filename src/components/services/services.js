import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Front-End Development & Web Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>SEO-friendly, responsive websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Building high-converting funnels and landing pages.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Bringing design concepts to life with clean code.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Collaborating seamlessly across teams and clients.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>WordPress & Funnels</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Customizing WordPress themes and plugins with PHP.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Building and optimizing WooCommerce stores.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                Designing and automating email sequences and autoresponders.
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Integrating CRM tools like Go Highlevel.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Site Maintenance & Optimization</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Fixing bugs and troubleshooting website issues.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Optimizing page speed and SEO best practices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Setting up Google Analytics and conversion tracking.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Tracking and controlling changes to site source code.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
