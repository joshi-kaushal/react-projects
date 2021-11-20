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


	return <article className="bg-white py-6 px-8 border rounded-md shadow-lightShadow transition duration-300 ease-linear text-center hover:shadow-darkShadow">
		<div className='img-container'>
			<img src={image} alt={name} className='person-img'></img>
			<span className='absolute top-0 left-0 w-10 h-10 grid place-items-center border rounded-50 transform translate-y-1/4 bg-reviewsColor-primaryLight text-white'>
				<FaQuoteRight />
			</span>
		</div>

		<h4 className='mb-1 uppercase font-bold text-xl'>{name}</h4>
		<p className='mb-2 uppercase text-reviewsColor-primaryLight text-md'>{job}</p>
		<p className='mb-3'>
			{text}
		</p>

		<div className='button-container'>
			<button className='text-reviewsColor-secondaryDark text-xl bg-transparent border-transparent my-0 mx-2 transition duration-300 ease-out cursor-pointer hover:text-reviewsColor-primaryLight' onClick={prevPerson}>
				<FaChevronLeft />
			</button>
			<button className='text-reviewsColor-secondaryDark text-xl bg-transparent border-transparent my-0 mx-2 transition duration-300 ease-out cursor-pointer hover:text-reviewsColor-primaryLight' onClick={nextPerson}>
				<FaChevronRight />
			</button>
		</div>

		<button className='mt-2 bg-reviewsColor-secondarySecondary text-reviewsColor-primaryLight py-1 px-2 capitalize border rounded-2xl transition duration-300 ease-in cursor-pointer hover:bg-reviewsColor-primaryLight hover:text-reviewsColor-primaryDark' onClick={randomPerson}>
			Random
		</button>

	</article>;
};

export default Review;
