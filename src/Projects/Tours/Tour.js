import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<article className='bg-white border rounded-nd my-8 mx-0 shadow-lightShadow transition duration-300 ease-linear hover:shadow-darkShadow'>
			<img className='w-full h-80 object-cover border rounded-tl-2xl rounded-tr-2xl' src={image} alt={name} />
			<footer className='py-6 px-8'>
				<div className='flex justify-between items-center mb-6'>
					<h4 className='mb-0 text-2xl'>{name}</h4>
					<h4 className='py-1 px-1 border rounded-md text-toursColor-primary font-semibold text-lg'>{price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}`}
					<span className='bg-transparent border-transparent capitalize text-base cursor-pointer pl-1 text-toursColor-primary' onClick={() => setReadMore(!readMore)}
					>
						{readMore ? 'Read Less' : '...Read More'}
					</span>
				</p>
				<button className= 'block w-48 my-1 mx-auto p-1 border rounded-md border-toursColor-red leading-4 text-toursColor-red hover:text-white hover:bg-toursColor-red transition duration-300 ease-in'
						onClick={() => removeTour(id)}
				>
					Remove Tour
				</button>
			</footer>
		</article>
	);
};

export default Tour;
