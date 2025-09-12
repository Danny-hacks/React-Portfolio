import React from "react";
import Resume from "../../assets/DanielObiefuleCv.pdf";
const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>
        Download Resume
      </a>
      <a href='#portfolio' className='btn btn-primary'>
        My Projects
      </a>
    </div>
  );
};

export default CTA;
