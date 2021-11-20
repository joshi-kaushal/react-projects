import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
	const [showInfo, setShowInfo] = useState(false);

	return <article className="py-4 px-6 mb-4 border-2 border-purple-500 rounded-xl shadow-lightShadow">
		<header className="flex justify-between items-center">
			<h4 className="transform-none leading-6">{props.question.title}</h4>
			<button className="w-8 h-8 bg-transparent border-transparent  bg-accordionColor-grey flex justify-center items-center border rounded-50 text-purple-900  border-purple-500 cursor-pointer ml-4 self-center min-w-2" onClick={() => setShowInfo(!showInfo)}>
				{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
			</button>
		</header>
		
		{showInfo && <p className=" text-gray-500 mb-0 mt-2">{props.question.info}</p>}
	</article>
}

export default Question;
