import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Education from './pages/Education'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Work/>
        <Education/>
      </main>

    </>
  )
}

export default App