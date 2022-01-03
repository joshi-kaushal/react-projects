import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from '../../context'

function Home() { 
	const {openSidebar, openModal} = useGlobalContext()
	return (
		<main className='flex items-center justify-center min-h-screen'>
			<button className='fixed text-4xl duration-1000 ease-in-out bg-transparent border-transparent cursor-pointer top-32 left-12 text-modalColor-primaryLight animate-bounce' onClick={openSidebar}>
				<FaBars onClick={openSidebar}/>
			</button>

			<button className='fixed inline-block px-3 py-2 text-white uppercase transition-all duration-300 ease-in bg-black border-2 border-black rounded-md cursor-pointer m-2text-sm shadow-darkShadow hover:text-black hover:bg-transparent'
					onClick={openModal}>Show Modal</button>
		</main>
	)
}

export default Home
