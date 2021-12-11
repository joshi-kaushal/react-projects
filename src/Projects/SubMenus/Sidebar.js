import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from '../../context'

const Sidebar = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext()

  // two classes in first div - 'sidebar-wrapper' and 'show'
  return <div className={` ${isMenuOpen ? 'visible transform scale-1 ' : "hidden"} 'fixed place-items-center top-0 left-0 z-0 grid w-full h-full transition duration-300 ease-in -z-1' `}>
    {/* sidebar */}
    <aside className="relative px-8 py-16 bg-white max-w-1170 w-90vw shadow-darkShadow">
     {/* close-btn */}
      <button className='absolute text-2xl text-red-500 bg-transparent border-transparent cursor-pointer top-4 right-4' onClick={closeMenu}>
        <FaTimes />
      </button>
      
      {/* sidebar-links */}
      <div className="sidebar-links ">
        {
          sublinks.map((item, index) => {
            const {page, links} = item

            return (
              <article key={index} className='mb-8'>
                <h4 className='text-lg font-semibold'>{page}</h4>

                {/* Inner Array */}
                {/* sidebar-sublinks */}
                <div className="grid grid-cols-2 gap-1">
                  {
                    links.map((link, index) => {
                      const {url, icon, label} = link

                      return (
                        <a key={index} href={url}  className='flex items-center p-2 text-base capitalize text-stripeColor-dark'>
                          <span style={{'margin-right': '.5rem'}}>{icon}</span>
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
    </aside>
  </div>
}

export default Sidebar
