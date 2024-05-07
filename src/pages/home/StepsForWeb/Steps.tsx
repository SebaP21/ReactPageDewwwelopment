import One from "../../../assets/icons/one (1).svg";
import Two from "../../../assets/icons/two (1).svg";
import Three from "../../../assets/icons/three (1).svg";
import Four from "../../../assets/icons/four (1).svg";
import Five from "../../../assets/icons/five (1).svg";
import Six from "../../../assets/icons/six-1.svg";
import { StepCard } from "./Stepscard/StepsCard";
import { StepsCardProps } from "./Stepscard/StepsCard";
// import { useInView } from "react-intersection-observer";


export const Steps = () => {
	// const{ref:Steps,inView} =useInView()

	// inView&& console.log('ok');



	return (
		<>
			<section
				className='steps-for-website'
				id='steps'
			>
				{stepsCardsData.map((data, index) => (
					<StepCard
						key={index}
						img={data.img}
						title={data.title}
						description={data.description}
					/>
				))}
			</section>
			<div className='decoration-gradient'></div>
		</>
	);
};

const stepsCardsData: StepsCardProps[] = [
	{
		img: One,
		title: "Skotaktuj się z nami",
		description:
			"Wystarczy, że zadzwonisz, wyślesz nam e-mail lub wypełnisz formularz kontaktowy na naszej stronie internetowej. Odpowiemy na Twoje zgłoszenie tak szybko, jak to możliwe!",
	},
	{
		img: Two,
		title: "Jak możemy Ci pomóc?",
		description:
			"W trakcie naszej rozmowy lub spotkania skupimy się na Twoich potrzebach i celach. Opowiedz nam o tym, jakiej strony potrzebujesz i czego oczekujesz. Wspólnie postaramy się znaleźć najlepsze rozwiązanie.",
	},
	{
		img: Three,
		title: "Projektowanie i tworzenie prototypu",
		description:
			"Na podstawie zebranych informacji stworzymy dla Ciebie wizualizację projektu. Dzięki temu zobaczysz, jak będzie wyglądała Twoja strona. Możemy również przygotować prototyp, który przedstawi Ci jak będzie działać.",
	},
	{
		img: Four,
		title: "Pozwól nam się tym zająć",
		description:
			"Nie martw się technicznymi aspektami! Dewwwelopment zajmie się tworzeniem strony internetowej od podstaw. Zbudujemy strukturę strony, dodamy funkcje i treści, a także zadbamy o wszystkie techniczne detale.",
	},
	{
		img: Five,
		title: "Testowanie i optymalizacja",
		description:
			"Przed publikacją strony przeprowadzamy jej dokładne testowanie. Sprawdzamy, czy wszystko działa sprawnie i bezproblemowo. Jeśli pojawią się jakiekolwiek błędy lub niedoskonałości, zajmiemy się nimi i dostosujemy stronę tak, aby była dopracowana.",
	},
	{
		img: Six,
		title: "Gotowa strona w Twoich rękach",
		description:
			"Nie musisz się martwić o techniczne aspekty wdrażania. Zajmiemy się przeniesieniem strony na odpowiedni serwer hostingowy i wszystkimi innymi krokami, aby Twoja strona była dostępna online. To wszystko !",
	},
];
