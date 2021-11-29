import React from 'react';

const Categories = props => {
	return <div className='flex justify-center mb-16'>
		{
			props.categories.map((category, index) => {
				return <button type='button' key={index} className='px-3 py-3 mx-2 my-0 text-base font-semibold capitalize transition-all ease-linear bg-transparent border-transparent rounded cursor-pointer hover:bg-gold hover:text-white' onClick={() => {
					props.filterItems(category)
				}}>
					{category}
				</button>
			})
		}
	</div>;
};

export default Categories;
