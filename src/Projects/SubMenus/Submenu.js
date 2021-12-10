import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from "../../context" 
const Submenu = () => {
  const {isSubmenuOpen, location, page: {page, links} } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('grid-cols-2')
    const submenu = container.current
    const { center, bottom } = location

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3) setColumns('grid-cols-3')
    if(links.length > 3) setColumns('grid-cols-4')
  
  }, [location, links])
  
  return <aside className={` ${isSubmenuOpen ? "inline-block bg-white" : "hidden"} 'shadow-darkShadow absolute top-16 left-1/2 transform -translate-x-50 z-3 p-8 border rounded-md transition duration-300 ease-in shadow-darkShadow'`} ref={container}>
    <h4 className='flex items-center w-40 font-semibold capitalize text-stripeColor-dark'>{page}</h4>
    <div className={`grid gap-y-1 gap-x-8 ${columns}`}>
      {
        links.map((link, index) => {
          const { label, icon, url } = link

           return (
             <a key={index} href={url} className='flex items-center w-40 capitalize text-stripeColor-normal hover:text-black' style={{ 'svg': 'margin-right: 1rem' }}>
               {icon}
               {label}
             </a>
           )
        })
      }
    </div>
  </aside>
} 

export default Submenu
