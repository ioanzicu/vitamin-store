import React from 'react'
import './Navigation.css'

const Navigation = ({ closeNav }) => (
  <div id='myNav' className='overlay'>
    <a className='close-btn' onClick={() => closeNav()}>
      &times;
    </a>
    <div className='overlay-content'>
      <a href=''>Vitamin Juice</a>
      <a href=''>Clothing</a>

      <a href=''>Supplements</a>
      <a href=''>Contact</a>
    </div>
  </div>
)

export default Navigation
