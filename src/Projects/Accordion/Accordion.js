import React, { useState } from 'react';
import questions from './data';
import SingleQuestion from './Question';

function Accordion() {

	const RenderQuestions = () => {
		return questions.map(question => {
			return <SingleQuestion question={question} />
		})
	}
	return <main>
		<div className="container">
			<h3 className='h3-question'>Questions</h3>
			<section className='info'>
				<RenderQuestions />
			</section>
		</div>
	</main>
}

export default Accordion;
