import React from 'react';
import './Reviews.css'
import Review from './Review';
function Reviews() {
	return <main>
		<section className='container'>
			<div className='title'>
				<h2>Reviews</h2>
				<div className='underline'></div>
			</div>

			<Review />
		</section>
	</main>
}

export default Reviews;
