import React, { useState } from 'react';
import { useGlobalContext } from '../../context';

import data from './data';
import List from './List';

function BirthdayReminder() {
	const { setBackground } = useGlobalContext()
	setBackground('bg-pink-200')

	const [people, setPeople] = useState(data);

	return (
		<div className='bg-pink-200'>
			<main className='flex items-center justify-center min-h-screen content-centers'>
				<section className='max-w-full p-4 mx-auto border border-pink-500 rounded-md w-90vw mb-9 shadow-darkShadow'>
					<h2 className='text-4xl font-bold text-left'>Birthday Reminder</h2>
					<h3 className='mb-8 text-lg font-semibold transform-none'>{people.length} Birthdays today!</h3>
					<List people={people} />
					{
						people.length > 0
							? <button className=
								'block w-full px-0 py-2 mx-auto mt-8 mb-0 text-xl capitalize border border-transparent border-pink-500 rounded cursor-pointer hover:bg-pink-300'
								onClick={() => setPeople([])}
							>
								Reset
							</button>

							: <button className=
								'block w-full px-0 py-2 mx-auto mt-8 mb-0 text-xl capitalize border border-transparent border-pink-500 rounded cursor-pointer hover:bg-pink-300'
								onClick={() => setPeople(data)}
							>
								Load Birthdays
							</button>
					}
				</section>
			</main>
		</div>
	)
}

export default BirthdayReminder;
