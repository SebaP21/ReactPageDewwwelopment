import { FC } from "react";

type StepsIconProps = {
	img: string;
};

export const StepsIcon: FC<StepsIconProps> = ({ img }) => {
	return (
		<i className='imgContainer'>
			<img
				src={img}
				alt=''
			/>
		</i>
	);
};
