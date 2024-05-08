import { useInView } from "react-intersection-observer";
import AdvancedItem from "../../../assets/videos/Ola-Tomasiewicz-rozbudowana-strona-gif.gif";
import { ProductComponent } from "../ProductComponent/ProductComponent";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";

export const AdvancedProject = () => {

	const { ref, inView } = useInView({
		threshold: 0.7,
	});

	const { setNavBackgroundColor } = useContext(AppContext);

	useEffect(() => {
		if (inView) {
			setNavBackgroundColor("break-color");
		}
	}, [inView, setNavBackgroundColor]);

	return (
		<ProductComponent
			sectionId='advancedproject'
			className='advanced-project right'
			sectionTitle='do 6 podstron'
			productDescription={
				<>
					<h3>Rozbudowana strona internetowa</h3>
					<p>
						Alternatywa dla małych i średnich firm, które potrzebują większej
						przestrzeni do prezentacji swojej działalności, oferty, portfolio
						czy referencji. Doskonały sposób na przedstawienie szerokiej gamy
						treści w sposób przejrzysty i zorganizowany, zapewniający efektywną
						komunikację z odwiedzającymi.
					</p>
					<h5 ref={ref}>Więcej miejsca na unikalne treści</h5>
					<p>
						Zawartość strony podzielona jest na kilka tematycznych podstron, a
						każda z nich może mieć swój unikalny wygląd, dostosowany do
						przedstawianych na niej informacji. Umożliwia to wyróżnienie
						najważniejszych treści, takich jak oferta usług, zespół, referencje
						czy kontakt. Dzięki rozbudowanej strukturze podstron, użytkownicy
						mogą łatwo przechodzić między poszczególnymi sekcjami, uzyskując
						pełniejszy obraz i zgłębiając szczegóły.
					</p>
				</>
			}
			productImg={AdvancedItem}
			productPrice='od 2500zł netto'
		/>
	);
};
