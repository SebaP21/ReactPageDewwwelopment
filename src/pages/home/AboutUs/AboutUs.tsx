import { idText } from "typescript";
import picture from "../../../assets/img/Dewwwelopment-projektowanie.jpg";
import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-white-on-transparent-background (2).png";

export const About = () => {
	return (
		<section
			id='aboutus'
			className='about'
		>
			<div className='about-img'>
				<img
					src={picture}
					alt='Projektowanie warstwy wizualnej strony www'
				/>
			</div>
			<div className='about-info-box'>
				<span className='decoration-line'></span>
				<span>
					<h4>O nas</h4>
				</span>
				<img
					src={logo}
					alt='logo firmy'
				/>
				<p className='about-text'>
					W Dewwwelopment zajmujemy się projektowaniem i tworzeniem stron
					internetowych oraz sklepów online. Nasza misja polega na dostarczaniu
					rozwiązań, które skutecznie reprezentują Ciebie lub Twoją firmę w
					sieci. <br />
					Dzięki naszemu doświadczeniu, kreatywności i zaangażowaniu, pomagamy
					budować silną obecność online i osiągać sukces w świecie cyfrowym.
				</p>

				<a href='#all-offer'>
					<button className='btn about-btn'>Dowiedz się więcej</button>
				</a>
			</div>
			<div className='about-shadow'></div>
		</section>
	);
};
