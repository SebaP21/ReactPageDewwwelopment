import OnePageItem from "../../../assets/videos/Uslugi_remontowo-budowlane_Piotr_Portka__Tomaszow_Lubelski_-_Google_Chrome_2023-06-23_21-30-01_AdobeExpress-1.gif";
import {
	ProductComponent,
	ProductProps,
} from "../ProductComponent/ProductComponent";

export const OnePage = () => {
	return (
		<ProductComponent
			sectionId='onepage'
			className='one-page right'
			sectionTitle='one-page'
			productDescription={
				<>
					<h3>Strony internetowe - wizytówki</h3>
					<p>
						Strona wizytówka typu “one-page” to doskonałe rozwiązanie dla małych
						firm, startupów, czy osób, które chcą stworzyć stronę wizytówkę lub
						landing page w nowoczesny sposób.
					</p>
					<h5>Wszystkie informacje na jednej stronie</h5>
					<p>
						Cechą charakterystyczną tego typu stron jest umieszczenie całej
						zawartości strony na jednym ekranie, bez konieczności przechodzenia
						między różnymi podstronami. To sprawia, że strona staje się bardziej
						skondensowana i łatwiejsza w nawigacji dla odwiedzających, co
						pozwala przekazać istotne informacje w atrakcyjny i zwięzły sposób.
					</p>
					<h5>Indywidualny design i responsywność</h5>
					<p>
						Dewwwelopment projektuje strony wizytówki z myślą o prostocie,
						estetyce i responsywności. Nasze strony są tworzone tak, aby
						doskonale wyglądały i działały na różnych urządzeniach, takich jak
						komputery, smartfony czy tablety. Dzięki temu użytkownicy mogą
						korzystać z nich bez problemów, niezależnie od urządzenia, którego
						używają.
					</p>
				</>
			}
			productImg={OnePageItem}
			productPrice='od 1800zł netto'
		/>
	);
};
