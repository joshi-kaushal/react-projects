import React from 'react'

import { useGlobalContext } from '../../context'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import './index.css'

function SubMenuApp() {
  const data = useGlobalContext();
  console.table(data)
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  )
}

export default SubMenuApp;
