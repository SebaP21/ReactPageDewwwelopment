import "../../home/style.css";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";

export const Headerhome = () => {
	const { ref, inView } = useInView({
		threshold: 0.7,
	});

	const { setNavBackgroundColor } = useContext(AppContext);

	useEffect(() => {
		if (inView) {
			setNavBackgroundColor("transparent");
		}
	}, [inView, setNavBackgroundColor]);

	return (
		<section
			id='home'
			ref={ref}
		>
			<header>
				<div className='header-body'>
					<h1>
						Budowanie stron i <br />
						sklepów internetowych
					</h1>
					<p>
						Zakładanie własnej strony internetowej nie musi być trudne.
						<br />
						Zbuduj z nami swój wizerunek w sieci!
					</p>
					<a href='#aboutus'>
						<button className='btn header-btn'>Sprawdź</button>
					</a>
				</div>
				<div
					ref={ref}
					className='header-shadow'
				></div>
			</header>
		</section>
	);
};
