import React, { useState, useEffect } from 'react'
import logo from './logo.png'
import './App.css'
import Card from './components/Card'
import Loading from './components/Loading'

const App = () => {
  const [toggleLogo, setToggleLogo] = useState(true)
  const [forceUpdate, setForceUpdate] = useState(true)
  const [loading, setLoading] = useState(true)

  const [cards, setCards] = useState([
    { id: 0, animation: 'card' },
    { id: 1, animation: 'card' },
    { id: 2, animation: 'card' },
    { id: 3, animation: 'card' },
    { id: 4, animation: 'card' },
    { id: 5, animation: 'card' },
    { id: 6, animation: 'card' },
    { id: 7, animation: 'card' },
    { id: 8, animation: 'card' }
  ])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const toggleLogoEvent = event => setToggleLogo(!toggleLogo)

  const clickCard = id => {
    let newCards = cards
    newCards[id].animation = 'card animated zoomOut'
    setCards(newCards)
    setForceUpdate(!forceUpdate)
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
      {loading ? (
        <Loading />
      ) : (
        <div className='Grid'>
          {cards.map(({ animation, id }) => (
            <Card
              animation={animation}
              id={id}
              clickedCard={clickCard}
              duration={150}
              key={id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
