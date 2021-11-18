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
		<section className='w-10/12 my-0 mx-auto md:w-8/12 py-20 px-0'>
			<div className='text-center mb-8'>
				<h1 className='text-5xl font-semibold text-gold'>Today's Menu</h1>
				<div className='underline'></div>
			</div>

			<Categories categories={categories} filterItems={filterItems} />
			<Menu menu={menu} />
		</section>
	)
}

export default MenuApp;