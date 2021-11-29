import React, { useState } from 'react'
import './index.css'
import Values from 'values.js'
import SingleColor from './SingleColor'

function ColorGenerator() {
	const [color, setColor] = useState('')	
	const [error, setError] = useState(false)
	const [list, setList] = useState([])

	const handleSubmit = e => {
		e.preventDefault()
		try{
			let colors = new Values(color).all(10)
			setList(colors)
			setError(false)
		} catch(err) {
			setError(true)
			console.log(err)
		}
	}

	return (
		<>
			<section className='flex flex-col items-center justify-center h-24 pl-8 text-center'>
				<h3 className='mb-3 mr-8 font-semibold sm:text-2xl md:text-3xl'>Color Generator</h3>

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={(e)=> {
							color.startsWith('#') ? setColor(e.target.value) : setColor(`#${e.target.value}`)
						}}
						placeholder='#12ed23' 
						className={`${error ? 'border rounded-md border-colorGenerator-ternary' : null} ' bg-gray-100 py-2 px-4 sm:text-sm md:text-2xl rounded-tl-md rounded-bl-md ' `}
					/>
					<button className='px-1 py-2 text-white capitalize border border-transparent cursor-pointer bg-colorGenerator-secondary rounded-tr-md rounded-br-md sm:text-sm md:text-2xl' type='submit'>Generate</button>
				</form>
			</section>

			<section className='grid m-1 grid-cols-color grid-rows-color min-h-vhminus100'>
				{
					list.map((color, index) => {
						return <SingleColor key={index} { ...color } index={index} />
					})
				}
			</section>


		</>
	)
}

export default ColorGenerator;