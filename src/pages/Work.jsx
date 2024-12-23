import React from 'react';
import { Work_data } from '../data';


const Work = () => {
  return (
    <section className='work-experience-section'>
      <div className='work-experience-wrapper'>
        <h3 className='work-experience-head-title'>WORK EXPERIENCE</h3>
        <div className="work-experience d-flex">
          {
            Work_data.map(item => (
              <div className="work-box">
                <div className="left-side">
                  <h6 className='duration'>{item.duration}</h6>
                  <p className='position'>{item.position}</p>
                </div>
                <div className="right-side">
                  <p className='company'>{item.company}</p>
                  <p className='description'>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work