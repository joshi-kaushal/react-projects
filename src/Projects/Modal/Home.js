import React, { useState, useEffect, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from '../../context'

function Home() { 
	const {openSidebar, openModal} = useGlobalContext()
	return (
		<main>
			<button className="sidebar-toggle" onClick={openSidebar}>
				<FaBars onClick={()=> openSidebar()}/>
			</button>

			<button className='btn' onClick={openModal()}>Show Modal</button>
		</main>
	)
}

export default Home