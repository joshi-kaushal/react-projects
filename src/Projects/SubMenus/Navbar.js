import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const { openMenu, openSubmenu, closeSubmenu} = useGlobalContext();
 
  const handleSubmenuClose = e => !e.target.classList.contains('link-btn') ? closeSubmenu() : ""

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  return <nav className='relative flex items-center justify-center h-20 bg-transparent z-1' onMouseOver={handleSubmenuClose}>
    <div className="items-center w-90vw max-w-7xl lg:grid lg:grid-cols-auto1FRauto ">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Stripe" className='nav-logo' />
        <button className="px-3 py-1 text-xl text-white transition duration-300 ease-in bg-black border rounded-md cursor-pointer lg:hidden hover:bg-stripeColor-normal toggle-btn" onClick={openMenu}>
          <FaBars />
        </button>
      </div>

      <ul className="items-center hidden h-full text-center text-white lg:grid lg:justify-self-center lg:grid-cols-3">
        <li className='h-full'>
          <button className='w-40 h-full text-xl font-bold leading-4 capitalize bg-transparent border-transparent link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li className='h-full'>
          <button className='w-40 h-full text-xl font-bold leading-4 capitalize bg-transparent border-transparent link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li className='h-full'>
          <button className='w-40 h-full text-xl font-bold leading-4 capitalize bg-transparent border-transparent link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>

      <button className='hidden px-3 py-1 text-base text-white transition duration-300 ease-in bg-black border rounded-md cursor-pointer lg:inline-block hover:bg-stripeColor-normal'>Sign In</button>
    </div>
  </nav>
}

export default Navbar
