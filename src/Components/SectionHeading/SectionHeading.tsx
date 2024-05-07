import { FC } from "react";

export type HeaderProps = {
	ctaHeader: string;
	mainHeader: string;
	sectionDescription?: string;
	className?:string
};

export const SectionHeading: FC<HeaderProps> = ({
	ctaHeader,
	mainHeader,
	sectionDescription,
	className
}) => {
	return (
		<div className={className? `"courses-title" + ${className}`: "courses-title"}>
			<h4>{ctaHeader}</h4>
			<h2>{mainHeader}</h2>
			<div className='decoration-line'></div>
			<p>{sectionDescription}</p>
		</div>
	);
};
