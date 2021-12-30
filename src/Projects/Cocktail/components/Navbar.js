import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='flex items-center h-20 bg-white border-b-2 border-cocktail-primaryColor shadow-lightShadow'>
      <div className="flex items-center justify-between mx-auto my-0 w-85vw max-w-1170">
        <Link to='/'>
          <img src={logo} alt="Cocktail DB Logo" />
        </Link>

        <ul className="flex items-center">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
