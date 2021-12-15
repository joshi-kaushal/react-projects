import React from 'react'

import {useGlobalContext} from '../../context'
import './cart.css'

import Navbar from './Navbar'
import CartContainer from './CartContainer'

function Cart() {
	return (
		<main>
			<Navbar />
			<CartContainer />
			<h1>HI</h1>
		</main>
	)
}

export default Cart;