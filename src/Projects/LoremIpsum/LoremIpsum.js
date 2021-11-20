import React, { useState } from 'react'
import data from './data';

const LoremIpsum = () => {
	const [count, setCount] = useState(0)
	const [text, setText] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		let amount = parseInt(count)
		count <= 0 ? amount = 1 : amount = count;
		count >= 8 ? amount = 8 : amount = count;

		setText(data.slice(0, amount))
	}
	return(
		<section className='section-center'>
			<h3>Lorem Ipsum Generator</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>Paragraphs:</label>
				<input 
					id='amount'
					type='number' 
					name='amount' 
					value={count} 
					onChange={(e) => setCount(e.target.value)}
				/>

				<button className='btn'>Generate</button>
			</form>

			<article className='lorem-text'>
				{
					text.map((item, index) => {
						return <p key={index}>{item}</p>
					})
				}
			</article>
		</section>
	)
}

export default LoremIpsum;