import { FC } from "react";

export type CourseTaskProps = {
	img: string;
	taskTitle: string;
	taskDescription: string;
};

export const CourseTask: FC<CourseTaskProps> = ({
	img,
	taskTitle,
	taskDescription,
}) => {
	return (
		<div className='task-wrap'>
			<div className='task-icon'>
				<img
					src={img}
					alt=''
				/>
			</div>
			<div className='task-content'>
				<div className='decoration-line'></div>
				<h5>{taskTitle}</h5>
				<p>{taskDescription}</p>
			</div>
		</div>
	);
};
