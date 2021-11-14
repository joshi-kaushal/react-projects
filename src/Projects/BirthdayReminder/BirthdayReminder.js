import React, { useState } from 'react';
import data from './data';
import List from './List';
import './BirthdayReminder.css';
function BirthdayReminder() {
	const [people, setPeople] = useState(data);

	return (
		<div>
			<h2>Birthday Reminder</h2>
			<main>
				<section className="container">
					<h3>{people.length} Birthdays today!</h3>
					<List people={people} />
					<button onClick={() => setPeople([])}>Reset</button>
				</section>
			</main>
		</div>
	)
}

export default BirthdayReminder;
