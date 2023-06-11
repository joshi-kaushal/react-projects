import React from 'react';
import { useGlobalContext } from '../../context';

import questions from './data';
import SingleQuestion from './Question';

function Accordion() {
	const { setBackground } = useGlobalContext()
	setBackground('bg-purple-600')
	const RenderQuestions = (props) => {
		return props.propQuestions.map(question => {
			return <SingleQuestion question={question} />
		})
	}
	return <main className='flex items-center justify-center min-h-screen bg-purple-600'>
		<div className="grid gap-8 px-8 py-10 mx-auto my-20 bg-purple-200 border rounded w-90vw md:w-880 md:grid-cols-2501fr">
			<h3 className='self-center text-3xl font-medium leading-5'>Questions</h3>
			<section className='info'>
				<RenderQuestions propQuestions={questions} />
			</section>
		</div>
	</main>
}

export default Accordion;
