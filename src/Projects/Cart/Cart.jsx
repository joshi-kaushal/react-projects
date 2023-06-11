import React from 'react'

import {useGlobalContext} from '../../context'

import Navbar from './Navbar'
import CartContainer from './CartContainer'

function Cart() {
	
	const { loading, setBackground } = useGlobalContext()
	setBackground('bg-cart-primary')
	if(loading) {
		return (
			<div className="mt-20 font-semibold text-center capitalize">
				<h1>Loading...</h1>
			</div>
		)
	}
	
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	)
}

export default Cart;