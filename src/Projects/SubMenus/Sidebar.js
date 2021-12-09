import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from '../../context'

const Sidebar = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext()


  return <aside className="sidebar-wrapper">
    <div className="sidebar">
      <button className='close-btn' onClick={closeMenu}>
        <FaTimes />
      </button>
      <div className="sidebar-links ">
        {
          sublinks.map((item, index) => {
            const {page, links} = item

            return (
              <article key={index}>
                <h4>{page}</h4>

                {/* Inner Array */}
                <div className="sidebar-sublinks">
                  {
                    links.map((link, index) => {
                      const {url, icon, label} = link

                      return (
                        <a key={index} href={url}>
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
