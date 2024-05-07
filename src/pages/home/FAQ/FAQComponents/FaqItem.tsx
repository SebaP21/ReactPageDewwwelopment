import { FC, useState } from "react";
import { FaqQuestion } from "./FaqQuestion";
import { FaqAnswer } from "./FaqAnswer";

export type FaqItemProps = {
	question: string;
	answer: string;

	expanded: boolean;
	expand: () => void;
};

export const FaqItem: FC<FaqItemProps> = ({
	question,
	answer,
	expanded,
	expand,
}) => {
	return (
		<div className='faq-question'>
			<FaqQuestion
				question={question}
				onClick={expand}
			/>
			{expanded && <FaqAnswer answer={answer} />}
		</div>
	);
};
