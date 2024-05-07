import {FC} from "react";

const descriptions = [
    `Strony wizytówkowe, znane również jako strony one page, są idealnym
    rozwiązaniem dla osób i małych firm, które chcą przedstawić swoje
    usługi, produkty lub informacje w sposób klarowny i zwięzły.
    Użytkownik przewija stronę w dół, aby poznać kolejne sekcje.
    Wszystkie informacje skoncentrowane w jednym miejscu.`,

    `Rozbudowane witryny, które składają się z kilku podstron,
    umożliwiając bardziej szczegółowe przedstawienie treści lub
    portfolio. Każda podstrona może być dedykowana innemu tematowi lub
    sekcji biznesowej. Oferują wygodną nawigację i pełne dostosowanie
    treści do potrzeb użytkownika.`,

    `Funkcjonalne i estetyczne sklepy z pełną integracją z platformami
    e-commerce, takimi jak WooCommerce i PrestaShop. Zapewniają płynną
    obsługę zamówień, elastyczne opcje płatności oraz możliwość łatwego
    zarządzania produktem i zawartością sklepu. Sklepy zoptymalizowane
    są pod kątem efektywności i wydajności, co znacznie poprawia ich
    pozycję w wynikach wyszukiwania.`,

    `Spersonalizowane rozwiązania dopasowane do wyzwań najbardziej
    wymagających klientów. W ramach projektów indywidualnych skupiamy
    się na tworzeniu rozbudowanych serwisów internetowych oraz platform
    szkoleniowych. Oferujemy możliwość tworzenia dedykowanych platform
    edukacyjnych umożliwiających przeprowadzanie szkoleń online, kursów
    oraz przechowywanie materiałów dostępnych dla Twoich użytkowników.`,

    `Doskonała okazja dla wszystkich, którzy chcą zdobyć niezbędną wiedzę
    i umiejętności w zarządzaniu własną stroną internetową. Nasze
    szkolenia zapewniają praktyczne szkolenie w obszarach takich jak
    aktualizacja treści, dodawanie nowych funkcji, optymalizacja witryny
    pod kątem szybkości i SEO oraz efektywne zarządzanie pluginami i
    narzędziami.`,

    `Bez względu na to, czy dopiero zakładasz swoją stronę, czy już ją
    posiadasz- oferujemy pomoc i wsparcie techniczne. Szybka reakcja,
    fachowe porady i skuteczne rozwiązania. Dzięki naszemu wsparciu
    możesz mieć pewność, że Twoja strona będzie działać sprawnie, bez
    zakłóceń i awarii.`,
];

type OfferDescriptionProps = {
    description: string;
}
export const OfferDescription: FC<OfferDescriptionProps> = ({description}) => {
    return (
        <p className='services-description'>
            {description}
        </p>
    );
};
