import { OfferCard, OfferCardProps } from "./OfferCard/OfferCard";
import onePageIcon from "../../../assets/icons/web-programming-2.svg";
import advancedIcon from "../../../assets/icons/coding-1.svg";
import ecommerce from "../../../assets/icons/ecommerce-1.svg";
// import { useInView } from "react-intersection-observer";
import individual from "../../../assets/icons/star-2.svg";
import Training from "../../../assets/icons/graduate-1.svg";
import Support from "../../../assets/icons/settings-2.svg";
import { SectionHeading } from "../../../Components/SectionHeading/SectionHeading";

export const Offerbox = () => {
	// const { ref, inView } = useInView();

	// console.log(inView, "Offerbox in view");
	return (
		<section
			id='all-offer'
			className='services-box'
			// ref={ref}
		>

			<SectionHeading
			ctaHeader="co oferujemy?"
			mainHeader="usługi"
			className="services-title"
			/>
			{/* <div className='services-title'>
				<span className='decoration-line'></span>
				<h4>Co oferujemy?</h4>
				<h2>usługi</h2>
			</div> */}
			<div className='services-cards-box'>
				{offerCardsData.map((data, index) => (
					<OfferCard
						key={index}
						imgSrc={data.imgSrc}
						title={data.title}
						description={data.description}
					/>
				))}
			</div>
		</section>
	);
};

const offerCardsData: OfferCardProps[] = [
	{
		title: "Strony internetowe-wizytówki",
		description:
			"Strony wizytówkowe, znane również jako strony one page, są idealnym" +
			" rozwiązaniem dla osób i małych firm, które chcą przedstawić swoje" +
			" usługi, produkty lub informacje w sposób klarowny i zwięzły. " +
			"Użytkownik przewija stronę w dół, aby poznać kolejne sekcje. " +
			"Wszystkie informacje skoncentrowane w jednym miejscu.",
		imgSrc: onePageIcon,
	},
	{
		title: "Rozbudowane strony internetowe",
		description:
			"Rozbudowane witryny, które składają się z kilku podstron, " +
			"umożliwiając bardziej szczegółowe przedstawienie treści lub " +
			"portfolio. Każda podstrona może być dedykowana innemu tematowi " +
			"lub sekcji biznesowej. Oferują wygodną nawigację i pełne dostosowanie treści do potrzeb użytkownika.",
		imgSrc: advancedIcon,
	},
	{
		title: "Sklepy internetowe",
		description:
			"Funkcjonalne i estetyczne sklepy z pełną integracją" +
			"z platformami e-commerce," +
			"takimi jak WooCommerce i PrestaShop." +
			" Zapewniają płynną" +
			" obsługę zamówień, elastyczne opcje płatności oraz możliwość łatwego" +
			"zarządzania produktem i zawartością sklepu. Sklepy zoptymalizowane" +
			"są pod kątem efektywności i wydajności, co znacznie poprawia ich" +
			"pozycję w wynikach wyszukiwania.",
		imgSrc: ecommerce,
	},
	{
		title: "Projekty indywidualne",
		description:
			"Spersonalizowane rozwiązania dopasowane do wyzwań najbardziej" +
			"wymagających klientów. W ramach projektów indywidualnych skupiamy" +
			"się na tworzeniu rozbudowanych serwisów internetowych oraz platform" +
			"szkoleniowych. Oferujemy możliwość tworzenia dedykowanych platform" +
			"edukacyjnych umożliwiających przeprowadzanie szkoleń online, kursów" +
			"oraz przechowywanie materiałów dostępnych dla Twoich użytkowników.",
		imgSrc: individual,
	},
	{
		title: "Szkolenia",
		description:
			"Doskonała okazja dla wszystkich, którzy chcą zdobyć niezbędną wiedzę" +
			"i umiejętności w zarządzaniu własną stroną internetową. Nasze" +
			"szkolenia zapewniają praktyczne szkolenie w obszarach takich jak" +
			"aktualizacja treści, dodawanie nowych funkcji, optymalizacja witryny" +
			"pod kątem szybkości i SEO oraz efektywne zarządzanie pluginami i" +
			"narzędziami.",
		imgSrc: Training,
	},
	{
		title: "Wsparcie techniczne",
		description:
			"Bez względu na to, czy dopiero zakładasz swoją stronę, czy już ją posiadasz" +
			"- oferujemy pomoc i wsparcie techniczne. Szybka reakcja," +
			"fachowe porady i skuteczne rozwiązania." +
			" Dzięki naszemu wsparciu możesz mieć pewność," +
			" że Twoja strona będzie działać sprawnie, bez" +
			"zakłóceń i awarii.",
		imgSrc: Support,
	},
];
