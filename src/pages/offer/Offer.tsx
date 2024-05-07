import { OfferHeader } from "./HeaderOffer/HeaderOffer";

import "../offer/offer.css";
import { OnePage } from "./OnePage/OnePage";
import { BenefitsCta } from "./BenefitsCTA/BenefitsCta";
import { AdvancedProject } from "./AdvancedProject/AdvancedProject";
import { Ecommerce } from "./Ecommerce/Ecommerce";
import { Courses } from "./Courses/Courses";
import { CourseInfoCta } from "./CourseInfoCta/CourseInfoCta";
import { Support } from "./Support/Support";
import { FooterLogo } from "./FooterLogo/FooterLogo";


export const Offer = () => {
	return (
		<>
			<OfferHeader />
			<OnePage />
			<BenefitsCta />
			<AdvancedProject />
			<BenefitsCta />
			<Ecommerce />
			<BenefitsCta />
			<Courses />
			<CourseInfoCta />
			<Support />
			<FooterLogo />
		</>
	);
};
