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

	const RenderText = props => {
		return props.text.map((item, index) => {
			return <p className='mb-6 text-left' key={index}>{item}</p>
		})
	}

	return(
		<section className='w-90vw md:w-95vw my-0 mx-auto max-w-2xl mt-20 text-center'>
			<h3 className='text-loremColor-primary text-2xl font-semibold'>Lorem Ipsum Generator</h3>
			<form className='capitalize leading-8 mt-8 mb-16 flex justify-center items-center' onSubmit={handleSubmit}>
				<label htmlFor='amount' className='text-xl text-loremColor-primary'>Paragraphs:</label>
				<input 
					id='amount'
					className='py-1 px-2 w-16 border-none rounded-md my-0 mx-2 text-xl'
					type='number' 
					name='amount' 
					value={count} 
					onChange={(e) => setCount(e.target.value)}
				/>

				<button className='uppercase bg-loremColor-secondary hover:bg-loremColor-ternary text-loremColor-primary hover:text-loremColor-secondary py-1 px-3 h-8 leading-3 inline-block transition duration-300 ease-in text-sm border-2 border-loremColor-secondary hover:border-loremColor-ternary cursor-pointer shadow-lightShadow hover:shadow-darkShadow rounded-md'>Generate</button>
			</form>

			<article className='lorem-text'>
				<RenderText text={text} /> 
			</article>
		</section>
	)
}

export default LoremIpsum;