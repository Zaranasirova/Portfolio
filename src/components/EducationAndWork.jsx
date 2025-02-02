import React, { useEffect, useRef } from 'react';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const EducationAndWork = ({ title, data }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = debounce(() => {
      const workBoxes = containerRef.current.querySelectorAll('.work-box');
      workBoxes.forEach((box, index) => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => {
            box.classList.add('visible');
          }, index * 300);
        }
      });
    }, 100); // Scroll 100ms interval ilə işləyəcək

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yoxlama

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="work-experience-section">
      <div className="work-experience-wrapper" ref={containerRef}>
        <h2 className="work-experience-head-title">{title}</h2>
        <div className="work-experience">
          {data.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="left-side">
                <h6 className="duration">{item.duration}</h6>
                <p className="position">{item.position}</p>
              </div>
              <div className="right-side">
                <p className="company">{item.company}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndWork;
