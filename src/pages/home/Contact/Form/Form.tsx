import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
	name: string;
	surname: string;
	email: string;
	tel: number;
	message: string;
};

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 500));
		// ResultForm(data);
		console.log(
			`Twoja wiadomość od ${data.name} ${data.surname}: ${data.message}. Dane do kontaktu: * adres e-mail: ${data.email}, *tel: ${data.tel} `
		);
		alert("Wiadomość w konsoli!");
	};

	return (
		<>
			<form
				className='contact-form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='inputs-wrapper'>
					<div className='inputs'>
						<input
							{...register("name", {
								required: "Podaj swoje imię",
								minLength: 3,
							})}
							type='text'
							placeholder='Imię'
						/>
						{errors.name && (
							<div className='error-messages'>{errors.name.message} </div>
						)}
					</div>

					<div className='inputs'>
						<input
							{...register("surname", { required: "Nazwisko jest wymagane" })}
							type='text'
							placeholder='Nazwisko'
						/>
						{errors.surname && (
							<div className='error-messages'>{errors.surname.message}</div>
						)}
					</div>
				</div>

				<div className='inputs-wrapper'>
					<div className='inputs'>
						<input
							{...register("email", {
								required: "Podaj swój adres e-mail",
								pattern: {
									value: /^[^@]+@[^@]+\.[^@]+$/,
									message: "Podany adres e-mail jest nieprawidłowy",
								},
							})}
							type='text'
							placeholder='Adres e-mail'
						/>
						{errors.email && (
							<div className='error-messages'>{errors.email.message}</div>
						)}
					</div>
					<div className='inputs'>
						<input
							{...register("tel", {
								required: "Podaj swój numer telefonu",
								pattern: {
									value: /^\+?[1-9][0-9]{7,14}$/,
									message: "Numer powinien składać się z min 9 cyfr",
								},
							})}
							type='tel'
							placeholder='Numer telefonu'
						/>
						{errors.tel && (
							<div className='error-messages'>{errors.tel.message}</div>
						)}
					</div>
				</div>
				<div className='message-area'>
					<input
						className='message-area'
						{...register("message", {
							required: "Uzupełnij wiadomość!",
							minLength: 5,
						})}
						type='text'
						placeholder='Wiadomość'
					/>
					{errors.message && (
						<div className='error-messages'>{errors.message.message}</div>
					)}
				</div>

				<div className='contact-form'>
					<button
						disabled={isSubmitting}
						type='submit'
						className='btn btn-send'
					>
						{isSubmitting ? "Wysyłanie" : "Wyślij wiadomość"}
					</button>
				</div>
			</form>
		</>
	);
};

//pattern
//validate:(value) => value.includes("@")

// export const ResultForm: FC<FormFields> = (data) => {
// 	return(
// 	<div className='form-result'>
// 		<div className='result'>
// 			<p>{data.name}</p>
// 			<p>{data.surname}</p>
// 			<p>{data.email}</p>
// 			<p>{data.tel}</p>
// 			<p>{data.message}</p>
// 		</div>
// 	</div>
// );}
