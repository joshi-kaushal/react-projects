import React, {useState, useContext} from 'react'

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
	const [isMenuOpen, setIsMenuOpen] = useState(true)	
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)	

	const openMenu = () => setIsMenuOpen(true)
	const closeMenu = () => setIsMenuOpen(false)

	const openSubmenu = () => setIsMenuOpen(true)
	const closeSubmenu = () => setIsSubmenuOpen(false)

	return 	<AppContext.Provider
		value={{
			isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar,

			isMenuOpen, isSubmenuOpen, openMenu, closeMenu, openSubmenu, closeSubmenu
			}}
			>
				{children}
			</AppContext.Provider>
	}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider } 