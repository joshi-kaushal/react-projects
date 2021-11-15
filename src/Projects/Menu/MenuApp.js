import React, { useState } from 'react'
import './Menu.css'
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
		<section className='menu-section'>
			<div className='title'>
				<h1>Today's Menu</h1>
				<div className='underline'></div>
			</div>

			<Categories categories={categories} filterItems={filterItems} />
			<Menu menu={menu} />
		</section>
	)
}

export default MenuApp;