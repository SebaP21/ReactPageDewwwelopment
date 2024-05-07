import { Headerhome } from "./pages/home/HeaderHome/HeaderContent";
import { About } from "./pages/home/AboutUs/AboutUs";
import { Offerbox } from "./pages/home/OfferCards/OfferCards";
import { CtaSteps } from "./pages/home/CtaSteps/CTASteps";
import { Steps } from "./pages/home/StepsForWeb/Steps";
import { Faq } from "./pages/home/FAQ/Faq";
import { Contact } from "./pages/home/Contact/Contact";

function App() {
	return (
		<>
			<Headerhome />
			<About />
			<Offerbox />
			<CtaSteps />
			<Steps />
			<Faq />
			<Contact />
		</>
	);
}

export default App;
