import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import logo from './logo.svg';

function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useGlobalContext()
	return (
		<aside className={`${isSidebarOpen ? 'transform translate-x-10' : 'transform -translate-x-100'} 'fixed grid sm:w-full md:w-96 h-screen gap-4 transition duration-300 ease-in bg-white top-0 left-0 grid-rows-auto shadow-darkShadow`}>
			<div className="flex items-center justify-between px-6 py-4">
				<img src={logo} alt="logo" className="justify-center h-10" />
				<button className="mt-1 text-3xl bg-transparent border-transparent cursor-pointer text-modalColor-primaryLight hover:text-red-400" onClick={() => closeSidebar()}>
					<FaTimes />
				</button>
			</div>

			<ul className="links">
				{
					links.map(link => {
						const {id, url, text, icon} = link
						
						return (
							<li key={id}>
								<a className="flex items-center px-6 py-4 text-xl leading-5 capitalize transition duration-300 ease-in text-modalColor-greyDark hover:text-modalColor-greyDarker hover:bg-modalColor-greyWhite" href={url} target="_blank" rel="noreferrer">
									{icon}
									{text}
								</a>
							</li>
						)
					})
				}
			</ul>
			<ul className='flex justify-center pb-8'>
				{
					social.map(link => {
						const { id, url, icon } = link

						return (
							<li key={id}>
								<a className='w-4 h-4 p-2 mx-2 my-0 text-2xl transition duration-300 ease-in text-modalColor-primaryLight hover:text-modalColor-primaryDark' href={url}>{icon}</a>
							</li>
						)
					})
				}
			</ul>
		</aside>
	)
}

export default Sidebar