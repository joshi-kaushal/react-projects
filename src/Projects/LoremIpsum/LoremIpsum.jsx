import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import data from './data';

const LoremIpsum = () => {
	const { setBackground } = useGlobalContext()
	setBackground('bg-white')

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
		<section className='max-w-2xl mx-auto my-0 mt-20 text-center w-90vw md:w-95vw'>
			<h3 className='text-2xl font-semibold text-loremColor-primary'>Lorem Ipsum Generator</h3>
			<form className='flex items-center justify-center pb-1 mt-8 mb-16 leading-8 capitalize border-b-2' onSubmit={handleSubmit}>
				<label htmlFor='amount' className='text-xl text-loremColor-primary'>Paragraphs:</label>
				<input 
					id='amount'
					className='w-16 px-2 py-1 mx-2 my-0 text-xl border border-black rounded-md'
					type='number' 
					name='amount' 
					value={count} 
					onChange={(e) => setCount(e.target.value)}
				/>

				<button className='inline-block h-8 px-3 py-1 text-sm leading-3 uppercase transition duration-300 ease-in border-2 rounded-md cursor-pointer bg-loremColor-secondary hover:bg-loremColor-ternary text-loremColor-primary hover:text-loremColor-secondary border-loremColor-secondary hover:border-loremColor-ternary shadow-lightShadow hover:shadow-darkShadow'>Generate</button>
			</form>

			<article className='lorem-text'>
				<RenderText text={text} /> 
			</article>
		</section>
	)
}

export default LoremIpsum;