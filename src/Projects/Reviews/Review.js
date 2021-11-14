import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);

	const { name, image, job, text } = people[index];

	const checkNumber = (number) => {
		if (number > people.length - 1) { return 0 }

		if (number < 0) { return people.length - 1 }

		return number;
	}

	/* 
	 * Increases or decreases the index by 1
	 * and if it is greater than the length of the array, it will reset to 0.
	 * If smaller then returns the last index of the array
	 */
	const prevPerson = () => setIndex(checkNumber(index - 1))

	const nextPerson = () => setIndex(checkNumber(index + 1))

	const randomPerson = () => {
		setIndex(() => {
			let randomNumber = Math.floor(Math.random() * people.length);

			if (randomNumber === index) {
				randomNumber++;
			}

			return checkNumber(randomNumber);
		});
	}


	return <article className="review">
		<div className='img-container'>
			<img src={image} alt={name} className='person-img'></img>
			<span className='quote-icon'>
				<FaQuoteRight />
			</span>
		</div>

		<h4 className='author'>{name}</h4>
		<p className='job'>{job}</p>
		<p className='text'>
			{text}
		</p>

		<div className='button-container'>
			<button className='prev-btn' onClick={prevPerson}>
				<FaChevronLeft />
			</button>
			<button className='next-btn' onClick={nextPerson}>
				<FaChevronRight />
			</button>
		</div>

		<button className='random-btn' onClick={randomPerson}>
			Random
		</button>

	</article>;
};

export default Review;
