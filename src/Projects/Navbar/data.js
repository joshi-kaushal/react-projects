import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
	{
		id: 1,
		url: '/',
		text: 'random',
	},
	{
		id: 2,
		url: '/about',
		text: 'about',
	},
	{
		id: 3,
		url: '/projects',
		text: 'projects',
	},
	{
		id: 4,
		url: '/contact',
		text: 'contact',
	},
	{
		id: 5,
		url: '/profile',
		text: 'profile',
	},
]

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook className='w-7 h-7 mx-2' />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter className='w-7 h-7 mx-2'  />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin className='w-7 h-7 mx-2'  />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance className='w-7 h-7 mx-2' />,
	},
]
