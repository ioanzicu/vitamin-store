import React, { useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  const [toggleLogo, setToggleLogo] = useState(true)

  function toggleLogoEvent(event) {
    setToggleLogo(!toggleLogo)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className={toggleLogo ? 'static-logo' : 'animated-logo'}
          onClick={toggleLogoEvent}
          alt='logo'
        />
      </header>
    </div>
  )
}

export default App
