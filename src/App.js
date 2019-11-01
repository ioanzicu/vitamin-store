import React, { useState } from 'react'
import logo from './logo.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [toggleLogo, setToggleLogo] = useState(true)
  const [cards, setCards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ])

  function toggleLogoEvent(event) {
    setToggleLogo(!toggleLogo)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className={toggleLogo ? 'static-logo' : 'static-logo animated jello'}
          onMouseEnter={toggleLogoEvent}
          onMouseLeave={toggleLogoEvent}
          alt='logo'
        />
      </header>
      <div className='Grid'>
        {cards.map(card => (
          <Card duration={150} key={card.id} />
        ))}
      </div>
    </div>
  )
}

export default App
