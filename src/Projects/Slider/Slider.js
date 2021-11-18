import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';

function Slider() {
	const [people, setPeople] = useState(data)
	const [index, setIndex] = useState(0)

	// Tailwind CSS Button Component
	const SliderButton = (props) => (
		<div
			className=
			{`	${props.action === 'prev' ? 'left-0' : 'right-0'}
				absolute top-48
				transform -translate-y-50
				text-white bg-sliderColor-secondary hover:bg-sliderColor-primary
				grid place-items-center
				border border-transparent rounded
				h-7 w-7
				text-base cursor-pointer
				transition-all`
			}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	)

	// Handle underflow/overflow for index-people relation
	useEffect(() => {
		const lastIndex = people.length - 1;

		if (index < 0) { setIndex(lastIndex) }
		if (index > lastIndex) { setIndex(0) }

	}, [index, people])

	// Automate sliding
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 5000)

		return () => { clearInterval(slider) }

	}, [index])

	return (
		<section className='my-20 mx-auto sm:w-90vw md:w-95vw'>
			<div className='text-center mb-8'>
				<h2 className='flex items-center justify-center text-4xl font-bold'>
					<span className='text-sliderColor-primary text-4xl text-sliderColor-primaryDark font-bold'>/</span> Reviews
				</h2>
			</div>

			{/* Main Section */}
			<div className='my-0 mx-auto mt-16 max-w-880 h-450 text-center relative flex overflow-hidden '>
				{
					people.map((person, personIndex) => {
						const { id, image, name, title, quote } = person;

						// Initially all slides set as next
						let position = 'opacity-0 transform translate-x-100';
						if (personIndex === index) {
							// Active Slide
							position = 'opacity-100 transform translate-x-0';
						}
						if (
							personIndex === index - 1 ||
							(index === 0 && personIndex === people.length - 1)
						) {
							// Last Slide
							position = 'opacity-0 transform -translate-x-100';
						}

						// Actual Slides
						return (
							<article className={`${position} 'absolute top-0 left-0 w-full h-full transition-all duration-300 ease-linear'`} key={id}>
								<img src={image} alt={name} className='inline-block border rounded-full border-sliderColor-ternary mb-4 h-40 w-40 object-cover shadow-darkShadow' />
								<h4 className='uppercase mb-1 text-sliderColor-primary font-semibold'>{name}</h4>
								<p className='capitalize mb-3 text-sliderColor-secondary'>{title}</p>
								<p className='w-10/12 my-0 mx-auto leading-8 text-sliderColor-primary'>{quote}</p>

								<FaQuoteRight className='text-5xl mt-4 inline-block text-sliderColor-primary' />
							</article>
						)
					})
				}

				{/* Slider Buttons */}
				<SliderButton SliderButton action='prev' onClick={() => { setIndex(index - 1) }}>
					<FaChevronLeft />
				</SliderButton>

				<SliderButton action='next' onClick={() => { setIndex(index - 1) }}>
					<FaChevronRight />
				</SliderButton>

			</div>
		</section>
	)
}

export default Slider;
