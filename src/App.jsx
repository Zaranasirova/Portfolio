import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Work/>
      </main>

    </>
  )
}

export default App