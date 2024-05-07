import { useState } from "react";
import { FC } from "react";

export type FormComponentProps = {
	id: number;
	name: string;
	type: string;
	placeholder: string;
	errorMessage: string;
	pattern?: string;
	required?: boolean;
    value?:any
    onChange?: ()=>void

};

export const FormComponent: FC<FormComponentProps> = (props) => {
	const [focused, setFocused] = useState(false);
	const { errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = (e: any) => {
		setFocused(true);
	};

	return (
		<input
			{...inputProps}
			onChange={onChange}
			onBlur={handleFocus}
			// focused={focused.toString()}
		>
			<span>{errorMessage}</span>
		</input>
	);
};
