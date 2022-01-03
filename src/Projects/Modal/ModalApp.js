import React from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
import { useGlobalContext } from '../../context'


function ModalApp() {
	const { setBackground } = useGlobalContext()
	setBackground('bg-white')
	return (
		<>
			<Home />
			<Modal />
			<Sidebar />
		</>
	)

}

export default ModalApp