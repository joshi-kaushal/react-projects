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
		<nav className='bg-white shadow-lightShadow z-1'>
			<div className='p-4 md:max-w-7xl md:my-0 md:mx-auto md:flex md:items-center md:justify-between md:p-4'>
				<div className='flex items-center justify-between p4 md:p-0'>
					<img className='h-10' src={logo} alt='Logo' />
					<button className='text-xl transition duration-300 ease-linear bg-transparent border-transparent cursor-pointer md:hidden text-navbarColor-primary5 hover:transform hover:rotate-90 hover:text-navbarColor-primary1' onClick={() => setShowLinks(!showLinks)}>
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
										<a className='block px-4 py-2 pl-6 text-xl leading-4 capitalize transition duration-300 ease-linear text-navbarColor-grey3 hover:text-navbarColor-primary5 md:py-0 md:px-2 ' href={url}>
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
									<a className='mx-2 my-0 transition duration-300 ease-linear text-navbarColor-primary5 hover:text-navbarColor-primary7' href={url}>
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
