import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { GoLinkExternal } from 'react-icons/go'

import projects from '../../Projects';

const RenderCards = (props) => {
	return projects.map(project => {
		return (
			<section className='flex items-center justify-between h-40 px-4 py-2 mx-auto my-0 mb-4 transition-all duration-300 ease-in-out border border-none rounded-md w-85vw md:w-full bg-palette-card hover:bg-palette-hover shadow-darkShadow'>
				<div className='mr-3 '>
					<h3 className='font-serif text-2xl font-semibold md:text-2xl'>
						{project.name}
					</h3>
					<p className='text-lg font-semibold md:text-xl'>
						{project.description}
					</p>
				</div>

				<Link to={`${project.slug}`} className='flex items-center w-16 p-2 text-white transition-all duration-300 ease-in-out border rounded-md hover:border-palette-buttons bg-palette-buttons border-palette-buttons justify-items-end hover:bg-palette-card hover:text-black '>
					Visit <span className='ml-1'><GoLinkExternal /></span>
				</Link>
			</section>
		)
	})
}

const Hero = (props) => {
	return <main className='bg-palette-background'>
		<h2 className='font-serif text-center '>Project List</h2>

		<div className="grid mx-auto my-0 mt-20 lg:grid-cols-2 xl:grid-cols-3 md:gap-10 w-85vw place-content-center">
			<RenderCards />
		</div>
	</main>
}

export default Hero;