import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
	const [showInfo, setShowInfo] = useState(false);

	return <article className="question">
		<header>
			<h4>{props.question.title}</h4>
			<button className='btn-accordion' onClick={() => setShowInfo(!showInfo)}>
				{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
			</button>
		</header>
		{showInfo && <p>{props.question.info}</p>}
	</article>
}

export default Question;
