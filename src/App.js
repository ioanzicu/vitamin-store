import React, { useState, useEffect } from 'react'
import logo from './logo.png'
import './App.css'
import Card from './components/Card'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import data from './data.json'

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
    setCards(data)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [cards])

  const toggleLogoEvent = event => setToggleLogo(!toggleLogo)

  const showBack = id => {
    cards[id].animation = 'card card-flip'
    setCards(cards)
    setForceUpdate(!forceUpdate)
  }

  const showFront = id => {
    cards[id].animation = 'card'
    setCards(cards)
    setForceUpdate(!forceUpdate)
  }

  const openNav = () => (document.getElementById('myNav').style.width = '100%')

  const closeNav = () => (document.getElementById('myNav').style.width = '0%')

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className={toggleLogo ? 'static-logo' : 'static-logo animated jello'}
          onMouseEnter={toggleLogoEvent}
          onMouseLeave={toggleLogoEvent}
          alt='logo'
          onClick={openNav}
        />
        <Navigation closeNav={closeNav} />
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className='Grid animated bounceInUp'>
          {cards.map(card => (
            <Card
              {...card}
              showBack={showBack}
              showFront={showFront}
              duration={150}
              key={card.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
