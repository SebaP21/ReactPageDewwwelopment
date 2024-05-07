import { useState } from "react";
import { FaqItem, FaqItemProps } from "./FAQComponents/FaqItem";
import { SectionHeading } from "../../../Components/SectionHeading/SectionHeading";
// import { useState } from "react";

export const Faq = () => {
	const [expandedItemId, setExpandedItemId] = useState<number | undefined>(0);

	const handleExpand = (index: number) => {
		setExpandedItemId((prev) => {
			if (prev === index) {
				return undefined;
			}

			return index;
		});
	};

	return (
		<>
			<section
				id='faq'
				className='faq'

				>
				<SectionHeading
				ctaHeader="Najczęściej zadawane pytania"
				mainHeader="FAQ"
				sectionDescription="Nie znalazłeś odpowiedzi na swoje pytanie?Zadzwoń do Nas lub skorzystaj z formularza kontaktowego"
				className="faq-titles"
				/>
				<div className='faq-body'>
					{faqItemData.map((data, index) => (
						<FaqItem
							expanded={expandedItemId === index}
							expand={() => handleExpand(index)}
							key={index}
							question={data.question}
							answer={data.answer}
						/>
					))}
				</div>
			</section>
			<div className='decoration-gradient'></div>
		</>
	);
};

//Partial,record,pick ,omit

type SingleFaqItemData = Pick<FaqItemProps, "answer" | "question">;

const faqItemData: SingleFaqItemData[] = [
	{
		question: "Jak długo trwa proces tworzenia strony internetowej?",
		answer:
			"Czas tworzenia strony internetowej zależy od wielu czynników takich jak rozmiar projektu," +
			" zakres funkcjonalności i dostarczenie treści przez klienta" +
			"dla stron wizytówek typu One Page czas realizacji to zwykle od 3-5 dni," +
			"rozbudowana strona internetowa (do 5 podstron) od 5-7 dni," +
			"sklep internetowy-od 7-10 dni" +
			"projekty indywidualne -w zależności od zaawansowania projektu",
	},
	{
		question: "Czy mogę rozszerzyć swoją stronę w przyszłości?",
		answer:
			"Oczywiście! Nasze strony i sklepy internetowe mogą być łatwo rozbudowane o dodatkowe podstrony i funkcje w przyszłości," +
			"w zależności od Twoich potrzeb.",
	},
	{
		question: "Czy mogę samodzielnie zarządzać treściami na stronie?",
		answer:
			"Tak, w ramach ceny projektu zapewniamy 1h szkolenia online z obsługi Twojej strony, które umożliwi Ci samodzielne zarządzanie treściami, aktualizowanie zdjęć, dodawanie nowych sekcji i innych podstawowych czynności związanych z utrzymaniem strony w pełnej kondycji." +
			"Jeżeli jednak nie czujesz się na siłach możemy również zapewnić usługę zarządzania stroną po indywidualnym uzgodnieniu.",
	},
	{
		question: "Czy oferujecie wsparcie techniczne po zakończeniu projektu?",
		answer:
			"Tak, zapewniamy 12 miesięcy gwarancji na nasze projekty i oferujemy wsparcie techniczne po zakończeniu projektu." +
			"Jesteśmy gotowi pomóc w razie jakichkolwiek problemów lub pytań dotyczących Twojej strony",
	},
	{
		question: "Czy projekt strony będzie dostosowany do różnych urządzeń?",
		answer:
			"Tak, wszystkie nasze projekty są responsywne, co oznacza, że strona będzie odpowiednio wyglądać i działać na różnych urządzeniach, takich jak komputery, telefony komórkowe i tablety.",
	},
	{
		question: "Co jest zawarte w cenie strony /sklepu internetowego?",
		answer:
			"W pełni gotowa strona lub sklep internetowy." +
			"Hosting przez pierwszy rok w cenie." +
			"Niezależnie od tego jak zaawansowany projekt u Nas zamawiasz, chcemy uczynić proces tworzenia strony internetowej jak najbardziej wygodnym dla naszych klientów, dlatego opłata za hosting przez pierwszy rok jest wliczona w cenę. Nie musisz się martwić o poszukiwanie osobnego hostingu – my zajmiemy się tym za Ciebie." +
			"1h szkolenia online z zakresu obsługi strony. W Dewwwelopment nie zostawiamy Cię samego z filmikiem instruktażowym z serii “zrób to sam”. Zależy nam, żeby każdy klient mógł nauczyć się jak w pełni korzystać ze swojej własnej strony lub sklepu internetowego. Organizujemy godzinne, praktyczne szkolenie w formie spotkania online z zakresu aktualizacji treści, czy optymalizacji witryny dla codziennego użytku." +
			"Gwarancja 12 miesięcy. Jesteśmy pewni jakości naszych projektów, dlatego oferujemy 12-miesięczną gwarancję na wszystkie nasze realizacje. Jeśli wystąpią jakiekolwiek problemy związane z naszymi usługami, jesteśmy gotowi zapewnić wsparcie i rozwiązać je w ramach gwarancji.",
	},
];
