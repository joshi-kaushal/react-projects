import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { GoLinkExternal } from 'react-icons/go'

import projects from '../../Projects';


const Hero = (props) => {
	return <main className='bg-palette-background'>	
		<h2 className='font-serif text-center '>Project List</h2>

		{
			projects.map(project => {
				return (
					<section className='flex items-center justify-between p-4 mx-auto my-0 mb-4 transition-all duration-300 ease-in-out border border-none rounded-md bg-palette-card hover:bg-palette-hover shadow-darkShadow w-85vw md:w-3/5'>
						<div className='mr-3 '>
							<h3 className='font-serif text-2xl font-semibold md:text-2xl'>
								{project.name}
							</h3>
							<p className='text-lg font-semibold md:text-xl'>
								{project.description}
							</p>
						</div>

						<Link to={`${project.slug}`} className='flex items-center w-16 p-2 text-white transition-all duration-300 ease-in-out rounded-md bg-palette-buttons border-palette-buttons justify-items-end hover:bg-palette-card hover:text-black '>
							Visit <span className='ml-1'><GoLinkExternal /></span>
						</Link>
					</section>
				)
			})
		}
	</main>
}

export default Hero;