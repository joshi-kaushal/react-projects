import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const { openMenu, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    console.log(e.target.textContent);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  return <nav className='nav'>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Stripe" className='nav-logo' />
        <button className="btn toggle-btn" onClick={openMenu}>
          <FaBars />
        </button>
      </div>

      <ul className="nav-links">
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>

      <button className='btn signin-btn'>Sign In</button>
    </div>
  </nav>
}

export default Navbar
