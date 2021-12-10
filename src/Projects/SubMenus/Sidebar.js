import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from '../../context'

const Sidebar = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext()


  return <aside className={` ${isMenuOpen ? 'visible z-2 transform scale-1 ' : "invisible"} 'fixed place-items-center top-0 left-0 z-0 grid w-full h-full transition duration-300 ease-in transform scale-0-z-1' `}>
    <div className="relative px-8 py-16 bg-white max-w-1170 w-90vw h-95vw shadow-darkShadow">
      <button className='absolute text-2xl bg-transparent border-transparent cursor-pointer text-stripeColor-normal top-4 right-4' onClick={closeMenu}>
        <FaTimes />
      </button>
      <div className="sidebar-links ">
        {
          sublinks.map((item, index) => {
            const {page, links} = item

            return (
              <article key={index} className='mb-8'>
                <h4 className='font-semibold'>{page}</h4>

                {/* Inner Array */}
                <div className="grid grid-cols-2 gap-1">
                  {
                    links.map((link, index) => {
                      const {url, icon, label} = link

                      return (
                        <a key={index} href={url} className='flex items-center p-2 capitalize text-stripeColor-dark'>
                          {icon}
                          {label}
                        </a>
                      )
                    })
                  }
                </div>
              </article>
            )


          })
        }
      </div>
    </div>
  </aside>
}

export default Sidebar
