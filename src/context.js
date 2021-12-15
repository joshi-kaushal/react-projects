import React, { useState, useEffect, useContext, useReducer} from 'react'
import reducer from './reducer'

// ! Submenus
import sublinks from './Projects/SubMenus/data'

// ! Cart
import cartItems from './Projects/Cart/data'
const AppContext = React.createContext()

const AppProvider = ({children}) => {

	// ! - - - - - Slider - - - - - 
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openSidebar = () => setIsSidebarOpen(true)
	const closeSidebar = () => setIsSidebarOpen(false)
	
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	// ! - - - - - Submenus - - - - -
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

	// ! - - - - - Cart - - - - -
	const url = 'https://course-api.com/react-useReducer-cart-project'
	
	const initialState = {
		loading: false,
		cart: cartItems,
		total: 0,
		amount: 0
	}
	
	const [state, dispatch] = useReducer(reducer, initialState)

	const clearCart = () => dispatch({type: 'CLEAR_CART'})
	const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: id })
	const increaseAmount = id => dispatch({type: 'INCREASE_AMOUNT', payload: id})
	const decreaseAmount = id => dispatch({type: 'DECREASE_AMOUNT', payload: id})
	
	const fetchData = async () => {
		dispatch({ type: 'LOADING_ITEMS'})
		const response = await fetch(url)

		const cart = await response.json()
		dispatch({type: 'DISPLAY_ITEMS', payload: cart})
	}

	useEffect(()=> {
		fetchData()
	}, [])
	
	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' })
	}, [state.cart])

	return 	<AppContext.Provider
		value={{
			isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar, 

			isMenuOpen, isSubmenuOpen, page, location, openMenu, closeMenu, openSubmenu, closeSubmenu, setPage,

			...state, clearCart, removeItem, increaseAmount, decreaseAmount
			}}
			>
				{children}
			</AppContext.Provider>
	}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider } 