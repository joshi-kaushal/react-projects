import React from 'react'

import { useGlobalContext } from '../../context'

// import pages
import Home from './pages/Home'

// import components
import Navbar from './components/Navbar'

function Cocktail() {
	const { setBackground } = useGlobalContext()
	setBackground('bg-white')

	return (
		<>
			<Navbar />
			<Home />
		</>
	)
}

export default Cocktail
