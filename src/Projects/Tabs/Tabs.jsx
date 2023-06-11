import React, { useState, useEffect } from 'react'
import Jobs from './Jobs'
import Loading from './Loading'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
	const [loading, setLoading] = useState(true)
	const [jobs, setJobs] = useState([])

	const fetchJobs = async () => {
		const response = await fetch(url)
		const fetchedJobs = await response.json()

		setJobs(fetchedJobs)
		setLoading(false)
	}

	useEffect(() => {
		fetchJobs()
	}, [])

	if(loading) return <Loading />
	return <Jobs jobs={jobs}/>
}

export default App
