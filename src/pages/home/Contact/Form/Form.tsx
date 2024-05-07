import { useState } from "react";

import {
	FormComponent,
	FormComponentProps,
} from "./FormComponent/FormComponent";

export const Form = () => {
	const [values, setValues] = useState({
		name: "",
		surname: "",
		email: "",
		tel: "",
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const onChange = (e:any) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div
			className='contact-form'
			onSubmit={handleSubmit}
		>
			{inputs.map((input) => (
				<FormComponent
					key={input.id}
					{...input}
					// value={values[input.name]}
					// onChange={onChange}
				/>
			))}
		</div>
	);
};

const inputs: FormComponentProps[] = [
	{
		id: 1,
		name: "name",
		type: "text",
		placeholder: "Imię",
		errorMessage: "Wpisz swoje imię",
		required: true,
	},
	{
		id: 2,
		name: "surname",
		type: "text",
		placeholder: "Nazwisko",
		errorMessage: "Wpisz swoje nazwisko",
		required: true,
	},
	{
		id: 3,
		name: "email",
		type: "email",
		placeholder: "Adres e-mail",
		errorMessage: "Upsss.. Twój adres e-mail nie jest poprawny",
		required: true,
	},
	{
		id: 3,
		name: "tel",
		type: "tel",
		placeholder: "Telefon",
		errorMessage:
			"Twój telefon nie jest poprawny (min.9 znaków / może zawierać jedynie cyfry",
		required: true,
	},
];
