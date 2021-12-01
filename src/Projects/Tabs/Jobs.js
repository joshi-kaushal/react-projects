import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Jobs = (props) => {
	const [value, setValue] = useState(0)
	
	const { company, dates, duties, title } = props.jobs[value]
	console.log(company)
	return (
		<section className='w-11/12 max-w-screen-xl mx-auto my-20 md:w-full'>
			<div className='mb-16 text-center'>
				<h2>Experience</h2>
				<div className='underline'></div>
			</div>

			<div className='w-10/12 max-w-full mx-auto my-0 '>
				{/* Buttons */}
				<div className='flex flex-row flex-wrap justify-center mb-16'>
					{
						props.jobs.map((job, index) => {
							return (
								<button
									type='button' key={job.id}
									className=
									{` 'bg-transparent border-transparent capitalize text-xl my-0 mx-5 transaction transition-all ease-in border-secondary2 hover:text-tabsColor-primaryDark shadow-tsm'
										${index === value && 'text-tabsColor-primaryDark sm:shadow-tsm md:shadow-tsm'}
									`}
									onClick={() => setValue(index)}
								>
									{job.company}
								</button>
							)
						})
					}
				</div>
				{/* Job Info */}
				<div className='text-primary'>
					<article className='job-info'>
						<h3 className='text-3xl'>{title}</h3>
						<h4 className='inline-block p-2 font-semibold uppercase border rounded text-tabsColor-fontDarker bg-tabsColor-FontLighter'>{company}</h4>
						<p className='tracking-wide'>{dates}</p>

						{
							duties.map((duty, index) => {
								return (
									<div key={index} className='grid items-center gap-3 mb-5 grid-cols-auto'>
										<FaAngleDoubleRight className='text-tabsColor-primaryDarker'></FaAngleDoubleRight>
										<p className='mb-0 text-tabsColor-fontDark'>{duty}</p>
									</div>
								)
							})
						}
					</article>
				</div>
			</div>
		</section>
	)
}


export default Jobs;