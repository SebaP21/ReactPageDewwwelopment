import EccommerceItem from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";
import { ProductComponent } from "../ProductComponent/ProductComponent";

export const Ecommerce = () => {
	return (
		<ProductComponent
			sectionId='ecommerce'
			className='e-commerce right'
			sectionTitle='e-commerce'
			productDescription={
				<>
					<h3>Sklepy internetowe</h3>
					<p>
						Kompleksowe rozwiązanie dla przedsiębiorców, którzy chcą prowadzić
						sprzedaż swoich produktów lub usług w sieci. Możesz rozwinąć swój
						biznes online, dotrzeć do szerszego grona klientów i prowadzić
						sprzedaż w sposób wygodny i efektywny.
					</p>
					<h5>Pełna funkcjonalność e-commerce</h5>
					<p>
						Nasz sklep internetowy oferuje pełną funkcjonalność e-commerce,
						dzięki integracji z takimi platformami jak WooCommerce czy
						PrestaShop. Możesz łatwo dodawać, edytować i zarządzać swoimi
						produktami, kategoriami, zamówieniami, płatnościami i innymi
						aspektami sprzedaży online.
					</p>
					<h5>Bezpieczne płatności</h5>
					<p>
						Zapewniamy integrację z bezpiecznymi i popularnymi systemami
						płatności online, co umożliwia Twoim klientom dokonywanie płatności
						w sposób wygodny i bezpieczny. Wspieramy różne metody płatności,
						takie jak karty kredytowe, przelewy bankowe, portfele elektroniczne
						i inne.
					</p>
					<h5>Personalizacja i konfigurowalność</h5>
					<p>
						Możliwość personalizacji i konfigurowania różnych aspektów wyglądu i
						funkcjonalności. Możesz dostosować kolorystykę, układ strony,
						dodawać banery promocyjne, tworzyć zniżki i wiele więcej, aby
						dopasować sklep do swojej marki.
					</p>
					<h5>Analiza danych i raportowanie</h5>
					<p>
						Zastosowanie narzędzi analitycznych takich jak Google Search
						Console, czy Google Analytics umożliwia monitorowanie danych
						sprzedażowych, analizowanie zachowań klientów i generowanie
						raportów, co pozwala Ci lepiej zrozumieć zachowania odwiedzających i
						podejmować trafne decyzje biznesowe.
					</p>
				</>
			}
			productImg={EccommerceItem}
			productPrice='od 3000zł netto'
		/>
	);
};

{
	/* <section
			id="ecommerce"
			className="e-commerce offer-box"
		>
			<div className="offer-wrapper">
				<div className="offer-description">
					<h3>Sklepy internetowe</h3>
					<p>
						Kompleksowe rozwiązanie dla przedsiębiorców, którzy chcą prowadzić
						sprzedaż swoich produktów lub usług w sieci. Możesz rozwinąć swój
						biznes online, dotrzeć do szerszego grona klientów i prowadzić
						sprzedaż w sposób wygodny i efektywny.
					</p>
					<h5>Pełna funkcjonalność e-commerce</h5>
					<p>
						Nasz sklep internetowy oferuje pełną funkcjonalność e-commerce,
						dzięki integracji z takimi platformami jak WooCommerce czy
						PrestaShop. Możesz łatwo dodawać, edytować i zarządzać swoimi
						produktami, kategoriami, zamówieniami, płatnościami i innymi
						aspektami sprzedaży online.
					</p>
					<h5>Bezpieczne płatności</h5>
					<p>
						Zapewniamy integrację z bezpiecznymi i popularnymi systemami
						płatności online, co umożliwia Twoim klientom dokonywanie płatności
						w sposób wygodny i bezpieczny. Wspieramy różne metody płatności,
						takie jak karty kredytowe, przelewy bankowe, portfele elektroniczne
						i inne.
					</p>
					<h5>Personalizacja i konfigurowalność</h5>
					<p>
						Możliwość personalizacji i konfigurowania różnych aspektów wyglądu i
						funkcjonalności. Możesz dostosować kolorystykę, układ strony,
						dodawać banery promocyjne, tworzyć zniżki i wiele więcej, aby
						dopasować sklep do swojej marki.
					</p>
					<h5>Analiza danych i raportowanie</h5>
					<p>
						Zastosowanie narzędzi analitycznych takich jak Google Search
						Console, czy Google Analytics umożliwia monitorowanie danych
						sprzedażowych, analizowanie zachowań klientów i generowanie
						raportów, co pozwala Ci lepiej zrozumieć zachowania odwiedzających i
						podejmować trafne decyzje biznesowe.
					</p>
				</div>
				<div className="offer-media right">
					<img
						src={EccommerceItem}
					/>
				</div>
			</div>
			<div className="e-commerce-price">
				<h4>od 3000zł netto</h4>
			</div>
		</section>
        </> */
}
