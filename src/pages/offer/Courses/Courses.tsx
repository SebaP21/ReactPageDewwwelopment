import firstIcon from "../../../assets/icons/famous (1).svg";
import secondIcon from "../../../assets/icons/lecture (1).svg";
import thirdIcon from "../../../assets/icons/programmer-1.svg";
import fourthIcon from "../../../assets/icons/corporate-culture-2.svg";
import {
	HeaderProps,
	SectionHeading,
} from "../../../Components/SectionHeading/SectionHeading";
import { CourseTask, CourseTaskProps } from "./CourseTaskComponent/CourseTask";

export const Courses = () => {
	return (
		<>
			<section
				id='courses'
				className='courses offer-box'
			>
				<SectionHeading {...courseHeaderData[0]} />

				<div className='courses-tasks'>
					<div className='task-box'>
						{courseTaskData.map((data,index) => (
							<CourseTask
								key={index}
								img={data.img}
								taskTitle={data.taskTitle}
								taskDescription={data.taskDescription}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

const courseHeaderData: HeaderProps[] = [
	{
		ctaHeader: "Sprawdź swoją wiedzę",
		mainHeader: "Szkolenia",
		sectionDescription:
			"Szkolenie z zakresu obsługi strony, które oferuje Dewwwelopment, to doskonała okazja dla klientów, którzy chcą nauczyć się zarządzać i aktualizować swoje strony internetowe samodzielnie. Nasze szkolenie zapewnia praktyczne i szczegółowe wprowadzenie do obsługi strony, umożliwiając klientom pełną kontrolę nad ich online’ową obecnością.",
	},
];

const courseTaskData: CourseTaskProps[] = [
	{
		img: firstIcon,
		taskTitle: "Indywidualne podejście",
		taskDescription:
			"Nasze szkolenie jest dostosowane do potrzeb i umiejętności uczestników. Rozumiemy, że każdy klient może mieć inną wiedzę techniczną, dlatego dostosowujemy tempo i treść szkolenia, aby zapewnić optymalne zrozumienie i przyswojenie materiału.",
	},
	{
		img: secondIcon,
		taskTitle: "Omówienie głównych funkcji",
		taskDescription:
			"Podczas szkolenia omawiamy główne funkcje systemu zarządzania treścią, który jest używany do tworzenia strony klienta. Wyjaśniamy, jak dodawać nowe treści, tworzyć menu nawigacyjne, zarządzać formularzami kontaktowymi, aktualizować dane kontaktowe i wiele więcej.",
	},
	{
		img: thirdIcon,
		taskTitle: "Praktyczne ćwiczenia",
		taskDescription:
			"W trakcie szkolenia oferujemy praktyczne ćwiczenia, które pozwalają uczestnikom zdobyć praktyczne umiejętności w obszarze zarządzania stroną. Uczestnicy mają możliwość bezpośrednio pracować na swojej stronie i nauczyć się, jak aktualizować treści, dodawać nowe sekcje, zarządzać obrazami i innymi elementami.",
	},
	{
		img: fourthIcon,
		taskTitle: "Bezpieczeństwo i optymalizacja",
		taskDescription:
			"W naszym szkoleniu nie tylko uczymy obsługi strony, ale również zapewniamy wskazówki dotyczące bezpieczeństwa i optymalizacji. Wyjaśniamy, jak dbać o bezpieczeństwo strony, jak regularnie tworzyć kopie zapasowe danych oraz jak optymalizować stronę pod kątem szybkości ładowania i SEO.",
	},
];
