import { FC } from "react";

export type SupportCardProps = {
	title: string;
	description: string;
};

export const SupportCard: FC<SupportCardProps> = ({ title, description }) => {
	return (
		<>
			<div className='support-card'>
				<h3>{title}</h3>
				<div className='decoration-line'></div>
				<p className='support-description'>{description}</p>
			</div>
		</>
	);
};
