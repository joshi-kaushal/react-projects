import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { GoLinkExternal } from 'react-icons/go'

import projects from '../../Projects';


const Hero = (props) => {
	return <main>	
		<h2 className='font-serif text-center '>Project List</h2>

		{
			projects.map(project => {
				return (
					<section className='flex items-center justify-between p-4 mx-auto my-0 mb-4 bg-green-400 border border-green-500 rounded-md shadow-darkShadow w-85vw md:w-3/5 hover:bg-green-500 hover:border-green-700'>
						<div className='mr-3'>
							<h3 className='text-2xl font-bold md:text-3xl'>
								{project.name}
							</h3>
							<p className='text-lg font-semibold md:text-xl'>
								{project.description}
							</p>
						</div>

						<Link to={`${project.slug}`} className='flex items-center w-16 p-2 text-white bg-green-900 rounded-md justify-items-end hover:bg-indigo-400 '>
							Visit <span className='ml-1'><GoLinkExternal /></span>
						</Link>
					</section>
				)
			})
		}
	</main>
}

export default Hero;