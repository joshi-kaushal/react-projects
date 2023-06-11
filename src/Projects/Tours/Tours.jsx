import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className='mb-16 text center'>
				<h2 className='text-4xl font-bold text-center text-toursColor-primary'>{tours ? 'Tours' : 'No Tours Available'}</h2>
				<div className='w-24 h-1 mx-auto bg-toursColor-primary'></div>
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
