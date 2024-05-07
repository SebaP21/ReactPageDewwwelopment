import {
	HeaderProps,
	SectionHeading,
} from "../../../Components/SectionHeading/SectionHeading";
import { SupportCard, SupportCardProps } from "./SupportCard/SupportCard";

export const Support = () => {
	return (
		<section
			id='support'
			className='support'
		>
			<SectionHeading {...supportHeaderData[0]} />

			<div className='support-cards-box'>
				{supportCardData.map((data,index) => (
					<SupportCard
						key={index}
						title={data.title}
						description={data.description}
					/>
				))}
			</div>
		</section>
	);
};

const supportHeaderData: HeaderProps[] = [
	{
		ctaHeader: "potrzebujesz pomocy?",
		mainHeader: "Wsparcie techniczne",
		sectionDescription:
			"Niezależnie od tego, czy jesteś nowym właścicielem strony internetowej czy już ją posiadasz, oferujemy kompleksową pomoc. Zaufaj nam, a my zadbamy o Twoją platformę, pozwalając Ci skupić się na rozwoju swojego biznesu.",
	},
];

const supportCardData: SupportCardProps[] = [
	{
		title: "Wsparcie dla nowych stron i sklepów",
		description:
			"Jeśli dopiero zaczynasz swoją przygodę z tworzeniem strony internetowej lub sklepu internetowego, możemy Ci pomóc. Jesteśmy tutaj, aby udzielić Ci porad i wskazówek, jak poprowadzić swoją stronę od podstaw. Pomagamy w wyborze odpowiednich narzędzi, optymalizacji treści i dostosowaniu struktury witryny do Twoich potrzeb.",
	},
	{
		title: "Rozwiązywanie problemów",
		description:
			"Jeżeli masz już swoją stronę lub sklep internetowy, ale napotykasz problemy techniczne, nie martw się – mamy rozwiązania. Posiadamy wiedzę i doświadczenie w rozwiązywaniu różnorodnych problemów, takich jak błędy w kodzie, konflikty pluginów, problem z wydajnością czy kwestie związane z integracją z innymi narzędziami. Daj nam znać, a my zajmiemy się tym natychmiast.",
	},
	{
		title: "Aktualizacje i optymalizacja",
		description:
			"Wspieramy również istniejące strony i sklepy internetowe poprzez regularne aktualizacje i optymalizację. Dbamy o to, aby Twoja strona działała zgodnie z najnowszymi standardami i miała optymalną wydajność. Aktualizujemy oprogramowanie, pluginy i motywy, a także optymalizujemy treści pod kątem SEO, aby Twoja strona była widoczna i dobrze pozycjonowana w wyszukiwarkach.",
	},
];
