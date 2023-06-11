import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function ToursApp() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter(tour => tour.id !== id);
		setTours(newTours);
	}

	const fetchTours = async () => {
		setLoading(true)
		try {
			const response = await fetch(url)
			const tours = await response.json()
			setLoading(false)
			setTours(tours)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return <Loading />
	}

	if (tours.length === 0) {
		return <main className='max-w-3xl mx-auto my-20 w-90vw'> 
			<h1 className='mb-16 text-center'>
				No tours found
				<button className='btn' onClick={() => { fetchTours() }}>Load Tours</button>
			</h1>

		</main>
	}
	return (
		<main className='max-w-3xl mx-auto my-20 w-90vw'>
			<Tours tours={tours} removeTour={removeTour} />
		</main>)
}

export default ToursApp
