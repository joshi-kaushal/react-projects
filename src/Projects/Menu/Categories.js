import React from 'react';

const Categories = props => {
	return <div className='mb-16 flex justify-center'>
		{
			props.categories.map((category, index) => {
				return <button type='button' key={index} className='bg-transparent border-transparent rounded text-base my-0 mx-2 py-3 px-3 cursor-pointer transition-all ease-linear hover:bg-gold hover:text-white capitalize font-semibold' onClick={() => {
					props.filterItems(category)
				}}>
					{category}
				</button>
			})
		}
	</div>;
};

export default Categories;
