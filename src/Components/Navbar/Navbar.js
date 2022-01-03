import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaHome } from 'react-icons/fa'

import { useGlobalContext } from '../../context'

const Navbar = () => {
	const { background } = useGlobalContext()
	return (
		<nav className={`${background} flex h-28`}>
			<div className="flex items-center justify-between mx-auto my-0 w-85vw max-w-1170">
				<a href='/' className='text-2xl font-bold text-black capitalize md:text-4xl' target="_blank" rel="noreferrer">
					react projects
				</a>

				<ul className="flex items-center">
					<li>
						<Link to='/' className='items-center text-black ont-semibold hover:text-palette-card '>
							<FaHome className='w-6 h-6 mr-2 md:mr-4 md:w-7 md:h-7'/>
						</Link>
					</li>
					<li>
						<a href='https://www.github.com/joshi-kaushal/react-projects' className='items-center text-black ont-semibold hover:text-palette-card' target="_blank" rel="noreferrer">
							<FaGithub className='w-6 h-6 mr-2 md:mr-4 md:w-7 md:h-7' />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar