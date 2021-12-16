import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useGlobalContext } from '../../context'
const Navbar = () => {

	const { amount } = useGlobalContext()

	return (
		<nav className='px-8 py-5 bg-cart-primary'>
			<div className='flex items-center justify-between w-full max-w-4xl mx-auto my-0'>
				<h3 className='mb-0 text-white'>useReducer</h3>
				<div className='relative block'>
					{/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='w-8 fill-blue-500'>
						<path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
					</svg> */}
					<BsFillCartFill className='w-8 h-8 text-white'/>
					<div className='absolute flex items-center justify-center border rounded-full -top-3 -right-3 w-7 h-7 bg-cart-primaryLight'>
						<p className='mb-0 text-xl text-white'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
