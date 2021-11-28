import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
	const [showInfo, setShowInfo] = useState(false);

	return <article className="px-6 py-4 mb-4 border-2 border-purple-500 rounded-xl shadow-lightShadow">
		<header className="flex items-center justify-between">
			<h4 className="leading-6 transform-none">{props.question.title}</h4>
			<button className="flex items-center self-center justify-center w-8 h-8 ml-4 text-purple-900 bg-transparent border border-transparent border-purple-500 cursor-pointer bg-accordionColor-grey rounded-50 min-w-2" onClick={() => setShowInfo(!showInfo)}>
				{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
			</button>
		</header>
		
		{showInfo && <p className="mt-2 mb-0 text-gray-500 ">{props.question.info}</p>}
	</article>
}

export default Question;
