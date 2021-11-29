import React, { useState, useEffect } from 'react'

function Menu(props) {
	const RenderMenu = props => {
		return props.menu.map(item => {
			const { id, title, img, desc, price } = item;

			return (
				<article key={id} className='menu-item'>
					<img src={img} alt={title} className='object-cover w-full border-2 rounded sm:h-36 md:h-48 border-gold' />
					<div className="item-info">
						<header className='flex justify-between border-b-2'>
							<h4 className='mb-2 font-semibold'>{title}</h4>
							<h4 className='font-semibold text-gold'>{price}</h4>
						</header>
						<div className='pt-4 mb-0 capitalize'>{desc}</div>
					</div>
				</article>
			)
		})
	}
	
	return <div className='justify-center w-11/12 grid-cols-2 mx-auto my-0 max-w-7xl lg:grid gap-y-12 gap-x-8'>
		<RenderMenu menu={props.menu} />
	</div>
}

export default Menu;

