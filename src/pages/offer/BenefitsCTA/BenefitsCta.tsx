import { useInView } from "react-intersection-observer";

export const BenefitsCta = () => {
	const { ref, inView } = useInView();

	return (
		<div
			ref={ref}
			className={
				inView ? "benefits-cta benefits-cta-animation" : 
				"benefits-cta"
			}
		>
			<p>Hosting i domena na rok w cenie</p>
			<p>12 miesięcy gwarancji</p>
			<p>Responsywność na urządzeniach mobilnych</p>
			<p>Zoptymalizowana pod kątem SEO</p>
			<p>Szkolenie z obsługi w cenie</p>
		</div>
	);
};
