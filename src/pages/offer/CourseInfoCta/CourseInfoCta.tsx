import { useInView } from "react-intersection-observer";

export const CourseInfoCta = () => {
	const { ref, inView } = useInView();

	const courseDescription = (
		<div className='course-desctiption-cta'>
			<p>
				W Dewwwelopment nie zostawiamy Cię z filmikiem szkoleniowym, na którym
				ktoś pokazuje Ci jak edytuje czyjąś stronę lub sklep. W ramach projektu
				organizujemy 1h szkolenie w formie online, na którym będziesz mógł
				nauczyć się pracować na swojej platformie.
			</p>
		</div>
	);

	return (
		<>
			<section
				ref={ref}
				id='course-info-cta'
				className='course-info-cta'
			>
				<div className='course-banner-cta'>
					<div className='course-header-cta'>
						<h3>Szkolenie online z obsługi strony w cenie projektu!</h3>
						<div className='course-header-cta-shadow'></div>
					</div>
				</div>
				{inView && courseDescription}
			</section>
		</>
	);
};
