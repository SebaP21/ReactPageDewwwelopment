import { SectionHeading } from "../../../Components/SectionHeading/SectionHeading";
import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import { ContactForm } from "./Form/Form";

export const Contact = () => {
	return (
		<>
			<section
				id='contact'
				className='contact'
			>
				<SectionHeading
					ctaHeader='Umów się na bezpłatną wycenę'
					mainHeader='Kontakt'
					sectionDescription='Zadzwoń lub skorzystaj z formularza kontaktowego i wyślij wiadomość'
					className='contact-titles'
				/>
				<div className='alert'>
					<p
						className='alert-text'
						id='alert-text'
					></p>
				</div>
				<div className='contact-wrapper'>
					<div className='contact-items'>
						<a href='#home'>
							<img
								src={logo}
								alt=''
							/>
						</a>
						<h3>Budowanie stron i sklepów internetowych</h3>
						<p>
							Zapraszamy do kontaktu od poniedziałku do piątku od 8.00-18.00
						</p>
						<a href='tel:+100100100'>100 100 100</a>
						<a href='mailto:mail@mail.com'>@mail</a>
					</div>
					<div className='contact-form'>
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
};


	
