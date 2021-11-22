import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function List(props) {

	return (
		<div className='grocery-list'>
			{
				props.list(item => {
					const { id, title } = item

					return (
						<article className='grocery-item'>
							<p className='title'>{title}</p>
							<button className='btn-container'>
								<button type='btn' className='edit-btn'>
									<FaEdit />
								</button>
								<button type='btn' className='delete-btn'>
									<FaTrash />
								</button>
							</button>
						</article>
					)
				} )
			}
		</div>
	)
}

export default List;