import React, { useState } from 'react';
import data from './data';
import List from './List';

function BirthdayReminder() {
	const [people, setPeople] = useState(data);

	return (
		<div className='bg-pink-200'>
			<main className='min-h-screen flex content-centers justify-center items-center'>
				<section className=' w-96 p-4 my-20 mx-auto max-w-full border border-pink-500 rounded-md'>
			<h2 className='text-center text-4xl font-bold'>Birthday Reminder</h2>
					<h3 className='text-lg transform-none mb-8 font-semibold'>{people.length} Birthdays today!</h3>
					<List people={people} />
					{
						people.length > 0
							? <button className='block w-full border-transparent mt-8 mb-0 mx-auto capitalize text-xl py-2 px-0 border rounded border-pink-500 hover:bg-pink-300 cursor-pointer' onClick={() => setPeople([])}>Reset</button>
							: <button className='block w-full border-transparent mt-8 mb-0 mx-auto capitalize text-xl py-2 px-0 border rounded border-pink-500 hover:bg-pink-300 cursor-pointer' onClick={() => setPeople(data)}>Load Birthdays</button>
					}	
				</section>
			</main>
		</div>
	)
}

export default BirthdayReminder;
