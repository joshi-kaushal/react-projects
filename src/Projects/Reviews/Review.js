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


	return <article className="px-8 py-6 text-center transition duration-300 ease-linear bg-white border rounded-md shadow-lightShadow hover:shadow-darkShadow">
		<div className='img-container'>
			<img src={image} alt={name} className='person-img'></img>
			<span className='absolute top-0 left-0 grid w-10 h-10 text-white transform border place-items-center rounded-50 translate-y-1/4 bg-reviewsColor-primaryLight'>
				<FaQuoteRight />
			</span>
		</div>

		<h4 className='mb-1 text-xl font-bold uppercase'>{name}</h4>
		<p className='mb-2 uppercase text-reviewsColor-primaryLight text-md'>{job}</p>
		<p className='mb-3'>
			{text}
		</p>

		<div className='button-container'>
			<button className='mx-2 my-0 text-xl transition duration-300 ease-out bg-transparent border-transparent cursor-pointer text-reviewsColor-secondaryDark hover:text-reviewsColor-primaryLight' onClick={prevPerson}>
				<FaChevronLeft />
			</button>
			<button className='mx-2 my-0 text-xl transition duration-300 ease-out bg-transparent border-transparent cursor-pointer text-reviewsColor-secondaryDark hover:text-reviewsColor-primaryLight' onClick={nextPerson}>
				<FaChevronRight />
			</button>
		</div>

		<button className='px-2 py-1 mt-2 capitalize transition duration-300 ease-in border cursor-pointer bg-reviewsColor-secondarySecondary text-reviewsColor-primaryLight rounded-2xl hover:bg-reviewsColor-primaryLight hover:text-reviewsColor-primaryDark' onClick={randomPerson}>
			Random
		</button>

	</article>;
};

export default Review;
