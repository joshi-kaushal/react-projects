import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import logo from './logo.svg';

function Sidebar() {
	const { isSidearOpen, closeSidebar } = useGlobalContext()
	return (
		<aside className="sidebar show-sidebar">
			<div className="sidebar-header">
				<img src={logo} alt="logo" className="logo" />
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>

			<ul className="links">
				{
					links.map(link => {
						const {id, url, text, icon} = link
						
						return (
							<li key={id}>
								<a href={url} target="_blank" rel="noreferrer">
									{icon}
									{text}
								</a>
							</li>
						)
					})
				}
			</ul>
			<ul className='social-icons'>
				{
					social.map(link => {
						const { id, url, icon } = link

						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						)
					})
				}
			</ul>
		</aside>
	)
}

export default Sidebar