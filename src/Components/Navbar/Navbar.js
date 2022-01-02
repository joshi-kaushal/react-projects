import React from 'react'

import { FaGithub, FaHome } from 'react-icons/fa'

const Navbar = () => {

	return (
		<nav className='flex items-center bg-palette-background h-28 shadow-lightShadow'>
			<div className="flex items-center justify-between mx-auto my-0 w-85vw max-w-1170">
				<a href='https://www.github.com/joshi-kaushal/react-miniprojects' className='text-2xl font-bold text-black capitalize md:text-4xl' target="_blank" rel="noreferrer">
					react projects
				</a>

				<ul className="flex items-center">
					<li>
						<a href='https://www.github.com/joshi-kaushal/react-miniprojects' className='items-center text-black ont-semibold ' target="_blank" rel="noreferrer">
							<FaHome className='w-6 h-6 mr-2 md:mr-4 md:w-7 md:h-7'/>
						</a>
					</li>
					<li>
						<a href='https://www.github.com/joshi-kaushal/react-projects' className='items-center text-black ont-semibold ' target="_blank" rel="noreferrer">
							<FaGithub className='w-6 h-6 mr-2 md:mr-4 md:w-7 md:h-7' />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar