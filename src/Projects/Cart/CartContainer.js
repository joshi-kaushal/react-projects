import React from 'react'

import { useGlobalContext } from '../../context'

import CartItem from './CartItem'

const CartContainer = () => {
	const { cart, total, clearCart } = useGlobalContext()
	
	if (cart.length === 0) {
		return (
			<section className='mx-auto my-0 mt-10 mb-12 text-center min-h-vhminus100 w-90vw'>
				<header>
					<h2 className='mb-12 text-center capitalize'>Your Bag</h2>
					<h4 className='mt-4 text-center lowercase text-cart-grey'>is currently empty :(</h4>
				</header>
			</section>
		)
	}

	return (
		<section className="max-w-3xl p-3 mx-auto my-0 mt-10 mb-12 text-center min-h-vhminus100 sm:w-90vw lg:w-2/4">
			<header>
				<h2 className='mb-12 font-semibold text-center capitalize'>Your Bag</h2>
			</header>

			<div>
				{
					cart.map(item => {
						return <CartItem key={item.id} {...item} />
					})
				}
			</div>

			<footer className='mt-16 text-center'>
				<hr className='border-transparent bg-cart-grey'/>

				<div className="cart-total">
					<h4 className='flex justify-between mt-4 capitalize'>total <span className='font-semibold'>${total}</span></h4>
				</div>

				<button className='inline-block px-4 py-2 leading-4 text-red-500 uppercase transition duration-300 ease-linear bg-transparent border border-red-500 rounded-md cursor-pointer shadow-lightShadow mt-9 hover:bg-red-400 hover:text-red-900 hover:border-red-400' onClick={clearCart}>
					Clear Cart
				</button>
			</footer>
		</section>
	)
}

export default CartContainer;