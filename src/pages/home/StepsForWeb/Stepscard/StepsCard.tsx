import { FC } from "react";
import { StepsIcon } from "./StepsCardComponents/StepsCardIcon";
import { StepsTitle } from "./StepsCardComponents/StepsCardTitle";
import { StepsDescription } from "./StepsCardComponents/StepsCardDescription";

 export type StepsCardProps = {
	img: string;
	title: string;
	description: string;
};

export const StepCard: FC<StepsCardProps> = ({ img, title, description }) => {
	return (
		<div className='steps-card'>
			<StepsIcon img={img} />
			<StepsTitle title={title} />
			<StepsDescription description={description} />
		</div>
	);
};
