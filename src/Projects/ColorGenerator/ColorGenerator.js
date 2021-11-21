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
		} catch(err) {
			setError(true)
			console.log(err)
		}
	}

	return (
		<>
			<section className='container'>
				<h3>Color Generator</h3>

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={(e)=> setColor(e.target.value)}
						placeholder='#12ed23' 
						className={`${error ? 'border rounded-md border-colorGenerator-ternary' : null}`}
					/>
					<button className='btn' type='submit'>Generate</button>
				</form>
			</section>

			<section className='colors'>
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