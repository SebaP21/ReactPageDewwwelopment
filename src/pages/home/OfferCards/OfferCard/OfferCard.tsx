import { OfferIcon } from "./OfferCardComponents/OfferIcon";
import { OfferTitle } from "./OfferCardComponents/OfferTitle";
import { OfferDescription } from "./OfferCardComponents/OfferDescription";
import { OfferBtn } from "./OfferCardComponents/OfferBtn";
import {FC} from "react";


export type OfferCardProps = {
	imgSrc: string;
	title: string;
	description: string;
}
export const OfferCard: FC<OfferCardProps> = ({description, imgSrc, title}) => {
	return (
		<div className='services-card'>
			<OfferIcon imgSrc={imgSrc}/>
			<OfferTitle title={title} />
			<OfferDescription description={description} />
			<OfferBtn />
		</div>
	);
};
