import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

function Modal() {
	const { isModalOpen, closeModal } = useGlobalContext()

	return (
		<div className={`${isModalOpen ? 'visible z-10' : "invisible z-0"} 'fixed top-0 left-0 w-full h-full grid place-items-center transition duration-300 ease-in'`}>
			<div className="relative grid text-center text-black bg-white border rounded-md w-90vw h-60 max-w-7xl place-content-center">
				<h3 className='flex items-center justify-center text-3xl font-bold'>modal content</h3>
				<button className="absolute text-4xl text-red-800 bg-transparent border-transparent cursor-pointer t-4 r-4" onClick={() => closeModal()}>
					<FaTimes />
				</button>
			</div>
		</div>
	)
}

export default Modal