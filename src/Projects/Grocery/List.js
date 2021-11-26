import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function List(props) {
	return (
		<div className='grocery-list'>
			{
				props.list.map(item => {
					const { id, title } = item

					return (
						<article className='grocery-item'>
							<p className='title'>{title}</p>
							<button className='btn-container'>
								<button type='btn' className='edit-btn' onClick={() => props.editItem(id)}>
									<FaEdit />
								</button>
								<button type='btn' className='delete-btn' onClick={() => props.removeItem(id)}>
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