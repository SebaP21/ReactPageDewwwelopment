import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";

export const CtaSteps = () => {
	const { ref: CtaSteps, inView } = useInView();
	const [count, setCount] = useState(1);

	const { setNavBackgroundColor } = useContext(AppContext);

	useEffect(() => {
		if (inView && count === 1) {
			setNavBackgroundColor("break-color");
			const interval = setInterval(() => {
				setCount((prev) => {
					const newCount = prev + 1;
					if (newCount > 6) return prev;
					return newCount;
				});
			}, 500);

			return () => {
				clearInterval(interval);
			};
		}
	}, [inView, setNavBackgroundColor]);

	return (
		<section
			className='cta'
			id='cta-steps'
		>
			<h3
				className='steps-counter'
				ref={CtaSteps}
			>
				Zbuduj swój wizerunek w{" "}
				<span
					className='counter'
					data-number='6'
				>
					{count}
				</span>{" "}
				prostych krokach!
			</h3>
			<div className='cta-shadow'></div>
		</section>
	);
};
