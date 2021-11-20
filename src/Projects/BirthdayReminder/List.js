import React from 'react';

const List = (props) => {
	return (
		<>
			{props.people.map((person) => {
				return (
					<article key={person.id} className='grid grid-cols-auto gap-3 mb-6 items-center'>
						<img className='w-20 h-20 object-cover border rounded-full shadow-darkShadow' src={person.image} alt={person.name} />
						<div>
							<h4 className='mb-3'>{person.name}</h4>
							<p className='mb-3'>{person.age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
