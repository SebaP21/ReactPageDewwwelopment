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
		console.log(data);
	};

	return (
		<>
			<div className='alert'>
				{errors.name && (
					<div className='error-messages'>{errors.name.message} </div>
				)}
				{errors.surname && (
					<div className='error-messages'>{errors.surname.message}</div>
				)}
				{errors.email && (
					<div className='error-messages'>{errors.email.message}</div>
				)}
				{errors.tel && (
					<div className='error-messages'>{errors.tel.message}</div>
				)}
				{errors.message && (
					<div className='error-messages'>{errors.message.message}</div>
				)}
			</div>

			<form
				className='contact-form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...register("name", { required: "Podaj swoje imię" })}
					type='text'
					placeholder='Imię'
				/>

				<input
					{...register("surname", { required: "Nazwisko jest wymagane" })}
					type='text'
					placeholder='Nazwisko'
				/>

				<input
					{...(register("email"), { required: true })}
					type='email'
					placeholder='Adres e-mail'
				/>

				<input
					{...register("tel", {
						required: "Podaj swój numer telefonu",
						minLength: {
							value: 9,
							message: "Numer powinien składać się z min 9 cyfr",
						},
					})}
					type='tel'
					placeholder='Numer telefonu'
				/>

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

// const ContactFormResult: FC<FormFields> = ({
// 	name,
// 	surname,
// 	email,
// 	tel,
// 	message,
// }) => {
// 	return (
// 		<div className='form-result'>
// 			<div className='result'>
// 				<p>{name}</p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 			</div>
// 		</div>
// 	);
// };
