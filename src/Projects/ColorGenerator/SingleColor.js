import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

function SingleColor(props) {
	const [alert, setAlert] = useState(false)
	const bcg = props.rgb.join(',')
	const hexValue = rgbToHex(...props.rgb)
	
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [alert])

	return (
  		<article
		className={`'py-4 px-8 cursor-pointer text-base normal-case' ${props.index > 10 && 'text-white'}`}
		style={{ backgroundColor: `rgb(${bcg})` }}
		onClick={() => {
			setAlert(true)
			navigator.clipboard.writeText(hexValue)
		}}
		>
			<p className={`mb-0 ${props.index > 10 ? 'text-white' : ' text-colorGenerator-secondary' }` }>{props.weight}%</p>
			<p className={`mb-0 ${props.index > 10 ? 'text-white' : ' text-colorGenerator-secondary' }` }>{hexValue}</p>
			
			{	alert &&
				<p className=
						{`mb-2 normal-case
							${props.index > 10 ? 'text-white' : ' text-colorGenerator-secondary'}
						`}
				>
					Copied to clipboard!
				</p> }
		</article>
	)
}

export default SingleColor