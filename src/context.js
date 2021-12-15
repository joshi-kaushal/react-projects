import React, {useState, useContext} from 'react'
import sublinks from './Projects/SubMenus/data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
	// Slider
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openSidebar = () => setIsSidebarOpen(true)
	const closeSidebar = () => setIsSidebarOpen(false)
	
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	// Submenus
	const [isMenuOpen, setIsMenuOpen] = useState(false)	
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)	
	const [location, setLocation] = useState({})
	const [page, setPage] = useState({page: "", links: []})

	const openMenu = () => setIsMenuOpen(true)
	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find(link => link.page === text)
        setPage(page)
		setLocation(coordinates)
		setIsSubmenuOpen(true)
	}
	const closeSubmenu = () => setIsSubmenuOpen(false)

	return 	<AppContext.Provider
		value={{
			isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar, 

			isMenuOpen, isSubmenuOpen, page, location, openMenu, closeMenu, openSubmenu, closeSubmenu, setPage
			}}
			>
				{children}
			</AppContext.Provider>
	}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider } 