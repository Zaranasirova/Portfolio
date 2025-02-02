import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header handleScroll={handleScroll} refs={{ workRef, educationRef, skillsRef, projectsRef, contactRef }} />
      <main>
        <section>
          <Home />
        </section>
        <section ref={workRef}>
          <Work />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
