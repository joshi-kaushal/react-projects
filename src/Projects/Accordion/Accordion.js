import React from 'react';
import questions from './data';
import SingleQuestion from './Question';

function Accordion() {

	const RenderQuestions = (props) => {
		return props.propQuestions.map(question => {
			return <SingleQuestion question={question} />
		})
	}
	return <main className='min-h-screen flex justify-center items-center bg-purple-600'>
		<div className="w-90vw md:w-880 my-20 mx-auto py-10 px-8 grid gap-8 md:grid-cols-2501fr border rounded bg-purple-200">
			<h3 className='text-3xl leading-5 font-medium self-center'>Questions</h3>
			<section className='info'>
				<RenderQuestions propQuestions={questions} />
			</section>
		</div>
	</main>
}

export default Accordion;
