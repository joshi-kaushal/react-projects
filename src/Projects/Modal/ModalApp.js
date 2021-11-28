import React, { useState, useEffect } from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'


function ModalApp() {
	return (
		<>
			<Home />
			<Modal />
			<Sidebar />
		</>
	)

}

export default ModalApp