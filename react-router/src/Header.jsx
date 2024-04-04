import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({tittle}) => {
  return (
    <header className='Header'>
      <h1>{tittle}</h1>
    </header>
  )
}

export default Header
