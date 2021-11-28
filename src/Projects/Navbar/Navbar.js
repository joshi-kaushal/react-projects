import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'

import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(true);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav className='bg-white shadow-lightShadow'>
			<div className=' p-4 md:max-w-7xl md:my-0 md:mx-auto md:flex md:items-center md:justify-between md:p-4'>
				<div className='flex items-center justify-between p4 md:p-0'>
					<img className='h-10' src={logo} alt='Logo' />
					<button className='md:hidden text-xl text-navbarColor-primary5 bg-transparent border-transparent transition duration-300 ease-linear cursor-pointer hover:transform hover:rotate-90 hover:text-navbarColor-primary1' onClick={() => setShowLinks(!showLinks)}>
						<FaBars />
					</button>
				</div>
				
				{/* Navigation Menu */}
				<div className='h-0 overflow-hidden transition duration-300 ease-linear' style={{"height": "!auto important"}} ref={linksContainerRef}>
					<ul className='links md:flex' ref={linksRef}>
						{
							links.map(link => {
								const { id, url, text } = link

								return (
									<li key={id}>
										<a className='text-xl capitalize text-navbarColor-grey3 leading-4 block py-2 px-4 transition duration-300 ease-linear pl-6 hover:text-navbarColor-primary5 md:py-0 md:px-2 ' href={url}>
											{text}
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>

				{/* Social Icons */}
				<ul className='hidden md:flex'>
					{
						social.map(socialOne => {
							const { id, url, icon } = socialOne

							return (
								<li key={id}>
									<a className='my-0 mx-2 text-navbarColor-primary5 transition duration-300 ease-linear hover:text-navbarColor-primary7' href={url}>
										{icon}
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
