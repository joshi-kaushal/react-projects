import React from 'react'

import Accordion from '../src/Projects/Accordion/Accordion';
import BirthdayReminder from '../src/Projects/BirthdayReminder/BirthdayReminder'
import MenuApp from '../src/Projects/Menu/MenuApp';
import Reviews from '../src/Projects/Reviews/Reviews'
import Tours from '../src/Projects/Tours/ToursApp';
import Tabs from '../src/Projects/Tabs/Tabs'
import Slider from '../src/Projects/Slider/Slider'
import LoremIpsum from '../src/Projects/LoremIpsum/LoremIpsum'
import ColorGenerator from '../src/Projects/ColorGenerator/ColorGenerator'
import Grocery from '../src/Projects/Grocery/Grocery'
import Navbar from '../src/Projects/Navbar/Navbar'
import ModalApp from '../src/Projects/Modal/ModalApp'
import SubMenuApp from '../src/Projects/SubMenus/SubMenuApp'
import Cart from '../src/Projects/Cart/Cart'
import Cocktail from '../src/Projects/Cocktail/Cocktail'

const projects = [
	{
		id: 1,
		name: 'Birthday Reminder',
		slug: '/birthday-reminder',
		description: 'A SPA to list people having birthdays	',
		component: <BirthdayReminder />
	},
	{
		id: 2,
		name: 'Stripe Homepage',
		slug: '/birthday-reminder',
		description: 'Clone of the homepage of Stripe',
		component: <SubMenuApp />
	},
	{
		id: 3,
		name: 'Cocktail',
		slug: '/cocktail',
		description: 'Know more about different cocktails',
		component: <Cocktail />
	},
	{
		id: 4,
		name: 'Modal',
		slug: '/birthday-reminder',
		description: 'Modal and Sidebar',
		component: <ModalApp />
	},
	{
		id: 5,
		name: 'Grocery App',
		slug: '/birthday-reminder',
		description: 'Make a grocery list to not forget what you want to buy',
		component: <Grocery />
	},
	{
		id: 6,
		name: 'Color Generator',
		slug: '/birthday-reminder',
		description: 'Generate a color palette',
		component: <ColorGenerator />
	},
]

export default projects;