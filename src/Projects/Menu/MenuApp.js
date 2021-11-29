import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function MenuApp() {
	const [menu, setMenu] = useState(items)
	const [categories, setCategories] = useState(allCategories)

	const filterItems = category => {
		if (category === 'all') {
			setMenu(items)
			return;
		}
		const filteredItems = items.filter(item => item.category === category)
		setMenu(filteredItems);
	}


	return (
		<section className='w-10/12 px-0 py-20 mx-auto my-0 md:w-8/12'>
			<div className='mb-8 text-center'>
				<h1 className='text-5xl font-semibold text-gold'>Today's Menu</h1>
				<div className='underline'></div>
			</div>

			<Categories categories={categories} filterItems={filterItems} />
			<Menu menu={menu} />
		</section>
	)
}

export default MenuApp;