import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function Grocery() {
	const [item, setItem] = useState('')
	const [list, setList] = useState([])
	const [isEditing, setIsEditing] = useState(false)
	const [editID, setEditID] = useState(null)
	const [alert, setAlert] = useState({
		show:true, 
		msg: '',
		type: ''
	})

	const showAlert = (show=false, type="", msg="") => {
		setAlert({
			show,
			msg,
			type
		})
	}

	const clearList = () => {
		showAlert(true, 'danger', "Empty list")
		setList([])
	}

	const removeItem = id => {
		showAlert(true, 'danger', "Item removed")
		setList(
			list.filter(item => item.id !== id)
		)
	}

	const editItem = id => {
		const itemToEdit = list.find(item => item.id === id)
		setIsEditing(true)
		setEditID(id)
		setItem(itemToEdit.title)

	}
	
	const handleSubmit = e => {
		e.preventDefault()

		if(!item) {
			// CLicked submit without entering the item
			showAlert(true, 'danger', 'Please Enter Values')
		} else if(item && isEditing) {
			// Wants to edit the existing item
			showAlert(true, 'success', 'Item edited successfully')
			setList(
				list.map(itemToEdit => {
					if (itemToEdit.id === editID) {
						return { ...itemToEdit, title: item}
					}
					return itemToEdit
				})
			)
			setIsEditing(false)
			setEditID(null)
			setItem('')
		} else {
			// New item
			const newItem = {
					id: new Date().getTime().toString(), 
					title: item
			}

			setList([...list, newItem])
			setItem('')
		}
	}

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert && <Alert {...alert} removeAlert={showAlert} list={list}/>}

				<h3>Grocery List</h3>

				<div className='form-control'>
					<input 
						type='text'
						className='grocery'
						placeholder='bread'
						value={item}
						onChange={(e) => setItem(e.target.value)}
					/>

					<button type='submit' className='submit-btn'>
						{ isEditing ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>

			{
				list.length > 0 && (
					<div className='grocery-container'>
						<List list={list} removeItem={removeItem} editItem={editItem}/>
						<button className='clear-btn' onClick={clearList}>Clear Items</button>
					</div>
				)
			}
		</section>
	)
}

export default Grocery;