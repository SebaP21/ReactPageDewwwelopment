import { Form } from "react-router-dom";
import { SectionHeading } from "../../../Components/SectionHeading/SectionHeading";
import logo from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";

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
						<Form/>
						<button className='btn btn-send'>Wyślij wiadomość</button>
					</div>
				</div>
			</section>
		</>
	);
};

{/* <input
	type='text'
	id='name'
	placeholder='Imię'
/>
<input
	type='text'
	id='surname'
	placeholder='Nazwisko'
/>
<input
	type='text'
	id='email'
	placeholder='Adres e-mail'
/>
<input
	type='text'
	id='tel'
	placeholder='Telefon'
/>
<textarea
	name='message'
	id='message'
	placeholder='Wiadomość'
></textarea> */}