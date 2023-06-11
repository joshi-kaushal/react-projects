import React from 'react';
import Review from './Review';

function Reviews() {
	return <main className='grid min-h-screen place-items-center bg-reviewsColor-secondarySecondary'>
		<section className='w-880'>
			<div className='mb-16 text-center'>
				<h2 className='text-3xl font-bold'>Reviews</h2>
				<div className='underline'></div>
			</div>

			<Review />
		</section>
	</main>
}

export default Reviews;
