import React from 'react'
import './Card.css'
import LazyLoad from 'react-lazyload'

const Card = ({ animation, id, showBack, showFront, description }) => (
  <LazyLoad height={650} offset={-100}>
    <div className={animation}>
      <div className='front' onClick={() => showBack(id)}>
        <img src='juice.jpg' alt='Vitamin Juice' className='card-image' />
        <div className='container'>
          <h3>
            Vitamin Juice<span className='price'> $24.99</span>
          </h3>
          <p>
            Need a jun on your vitamins while drinking? Tired of popping pills?
            Drink our vitamin enhanced juice, available in several flavours.
          </p>
        </div>
      </div>
      <div className='container-back back' onClick={() => showFront(id)}>
        <h3>
          Vitamin Juice<span className='price'> $24.99</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  </LazyLoad>
)

export default Card
