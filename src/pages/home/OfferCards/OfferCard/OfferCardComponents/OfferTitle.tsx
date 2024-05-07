import {FC} from "react";

const titles: string[] = [
	"Strony internetowe-wizytówki",
	"Rozbudowane strony internetowe",
	"Sklepy internetowe",
	"Projekty indywidualne",
	"Szkolenia",
	"Wsparcie techniczne",
];

type OfferTitleProps = {
	title: string;
}
export const OfferTitle: FC<OfferTitleProps> = ({title}) => {
	return <h3>{title}</h3>;
};
