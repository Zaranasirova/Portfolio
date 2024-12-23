import React from 'react';

const EducationAndWork = ({title, data}) => {
  return (
    <section className='work-experience-section'>
      <div className='work-experience-wrapper'>
        <h3 className='work-experience-head-title'>{title}</h3>
        <div className="work-experience">
          {data.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="left-side">
                <h6 className='duration'>{item.duration}</h6>
                <p className='position'>{item.position}</p>
              </div>
              <div className="right-side">
                <p className='company'>{item.company}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndWork;
