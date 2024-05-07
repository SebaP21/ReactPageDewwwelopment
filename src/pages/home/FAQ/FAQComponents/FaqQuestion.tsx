import { FC } from "react";

type FaqQuestionProps = {
	question: string;
	onClick: () => void;
};

export const FaqQuestion: FC<FaqQuestionProps> = ({ question, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='question-btn'
		>
			{question}
		</button>
	);
};
