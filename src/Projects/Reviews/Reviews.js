import React from 'react';
import Review from './Review';

function Reviews() {
	return <main className='min-h-screen grid place-items-center bg-reviewsColor-secondarySecondary'>
		<section className='w-880'>
			<div className='text-center mb-16'>
				<h2 className='text-3xl font-bold'>Reviews</h2>
				<div className='underline'></div>
			</div>

			<Review />
		</section>
	</main>
}

export default Reviews;
