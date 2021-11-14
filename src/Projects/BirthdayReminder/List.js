import React from 'react';

const List = (props) => {
	return (
		<>
			{props.people.map((person) => {
				return (
					<article key={person.id} className='person'>
						<img src={person.image} alt={person.name} />
						<div>
							<h4>{person.name}</h4>
							<p>{person.age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
