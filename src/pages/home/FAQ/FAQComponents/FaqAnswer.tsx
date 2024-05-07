import { FC } from "react";

type FAQAnswerProps = {
	answer: string;
};

export const FaqAnswer: FC<FAQAnswerProps> = ({ answer }) => {
	return (
		<div className='faq-answer faq-active'>
			<p className='faq-answer-text'>{answer}</p>
		</div>
	);
};
