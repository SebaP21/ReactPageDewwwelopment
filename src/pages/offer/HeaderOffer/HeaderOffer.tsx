import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppContext } from "../../../context/AppContext";

export const OfferHeader = () => {

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	const { setNavBackgroundColor } = useContext(AppContext);

	useEffect(() => {
		if (inView) {
			setNavBackgroundColor("transparent");
		}
	}, [inView, setNavBackgroundColor]);
	



	return (
		<section id='offer-header' ref={ref}>
			<header className='offer-header'>
				<h2>Oferta</h2>
			</header>
			<div className='offer-header-shadow'></div>
		</section>
	);
};
