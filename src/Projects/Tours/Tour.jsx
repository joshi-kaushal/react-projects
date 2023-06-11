import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<article className='mx-0 my-8 transition duration-300 ease-linear bg-white border rounded-nd shadow-lightShadow hover:shadow-darkShadow'>
			<img className='object-cover w-full border h-80 rounded-tl-2xl rounded-tr-2xl' src={image} alt={name} />
			<footer className='px-8 py-6'>
				<div className='flex items-center justify-between mb-6'>
					<h4 className='mb-0 text-2xl'>{name}</h4>
					<h4 className='px-1 py-1 text-lg font-semibold border rounded-md text-toursColor-primary'>{price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}`}
					<span className='pl-1 text-base capitalize bg-transparent border-transparent cursor-pointer text-toursColor-primary' onClick={() => setReadMore(!readMore)}
					>
						{readMore ? 'Read Less' : '...Read More'}
					</span>
				</p>
				<button className= 'block w-48 p-1 mx-auto my-1 leading-4 transition duration-300 ease-in border rounded-md border-toursColor-red text-toursColor-red hover:text-white hover:bg-toursColor-red'
						onClick={() => removeTour(id)}
				>
					Remove Tour
				</button>
			</footer>
		</article>
	);
};

export default Tour;
