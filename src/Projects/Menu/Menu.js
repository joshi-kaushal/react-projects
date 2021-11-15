import React, { useState, useEffect } from 'react'

function Menu(props) {
	const RenderMenu = props => {
		return props.menu.map(item => {
			const { id, title, img, desc, price } = item;

			return (
				<article key={id} className='menu-item'>
					<img src={img} alt={title} className='sm:h-36 md:h-48 w-full border-2 rounded object-cover border-gold' />
					<div className="item-info">
						<header className='flex justify-between border-b-2'>
							<h4 className='mb-2 font-semibold'>{title}</h4>
							<h4 className='text-gold font-semibold'>{price}</h4>
						</header>
						<div className='mb-0 pt-4 capitalize'>{desc}</div>
					</div>
				</article>
			)
		})
	}
	
	return <div className='w-11/12 my-0 mx-auto max-w-7xl lg:grid grid-cols-2 gap-y-12 gap-x-8 justify-center'>
		<RenderMenu menu={props.menu} />
	</div>
}

export default Menu;

