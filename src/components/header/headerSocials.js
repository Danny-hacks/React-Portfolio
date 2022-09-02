import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiNetlify} from 'react-icons/si';

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/daniel-obiefule-2a13381a3/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Danny-hacks" target="_blank"><BsGithub/></a>
        <a href="https://app.netlify.com/teams/danny-hacks/sites" target="_blank"><SiNetlify/></a>
    </div>
  )
}

export default headerSocials