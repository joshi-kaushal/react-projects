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
			<section className='flex flex-col items-center h-24 pl-8 text-center justify-center'>
				<h3 className='mr-8 sm:text-2xl md:text-3xl font-semibold mb-3'>Color Generator</h3>

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
					<button className='bg-colorGenerator-secondary py-2 px-1 border-transparent border rounded-tr-md rounded-br-md capitalize sm:text-sm md:text-2xl text-white cursor-pointer' type='submit'>Generate</button>
				</form>
			</section>

			<section className='grid grid-cols-color grid-rows-color min-h-vhminus100 m-1'>
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