import React from 'react'
import './hero.css'

const Hero = () => {
  const handeleClick = () => {
    console.log('I was clicked')
  }
  return (
    <div className='hero'>
      <p>zainab must be a hero</p>
      <button onClick={handeleClick}>Click me</button>
    </div>
  )
}

export default Hero
