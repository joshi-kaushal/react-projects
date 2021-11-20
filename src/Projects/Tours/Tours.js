import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className='text center mb-16'>
				<h2 className='text-center text-4xl font-bold text-toursColor-primary'>{tours ? 'Tours' : 'No Tours Available'}</h2>
				<div className='w-24 h-1 bg-toursColor-primary mx-auto'></div>
			</div>

			<div>
				{tours.map(tour => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />
				})}
			</div>
		</section>
	);
};

export default Tours;
