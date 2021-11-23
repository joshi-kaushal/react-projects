import React, { useEffect } from 'react'

function Alert(props) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			console.log(props)
			props.removeAlert()
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return <p className={`alert alert-style`}>{props.msg}</p>
}

export default Alert;