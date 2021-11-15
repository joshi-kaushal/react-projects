import React, { useState, useEffect } from 'react'

function Menu(props) {
	const RenderMenu = props => {
		return props.menu.map(item => {
			const { id, title, img, desc, price } = item;

			return (
				<article key={id} className='menu-item'>
					<img src={img} alt={title} className='photo' />
					<div className="item-info">
						<header>
							<h4>{title}</h4>
							<h4>{price}</h4>
						</header>
						<div className='item-text'>{desc}</div>
					</div>
				</article>
			)
		})
	}
	
	return <div>
		<RenderMenu menu={props.menu} />
	</div>
}

export default Menu;

