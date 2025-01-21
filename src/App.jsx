import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'



const App = () => {
  const firstSectionRef = useRef(null);

  useEffect(() => {
    firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
 
  return (
    <>
      <Header />
      <main>
        <Home ref={firstSectionRef} />
        <Work/>
        <Education/>
        <Skills/>
        <Projects/>
      </main>

    </>
  )
}

export default App