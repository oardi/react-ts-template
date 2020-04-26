import React, { useState } from "react";
import formService from '../shared/services/form.service';

const CNAME = 'FormsService';
export const FormsService = () => {

	const [values, setValues] = useState({
		gender: { value: '', label: 'Gender', validators: ['required'] },
		firstName: { value: '', label: 'Firstname', validators: ['required'] },
		lastName: { value: '', label: 'Lastname', validators: ['required'] },
		// birthdate: "",
		// email: "",
		// agb: false,
		// options: ""
	});

	const handleInputChange = e => {
		console.info(CNAME, 'handleInputChange');
		setValues(formService.handleInputChange(e, values));
	};

	const handleFormSubmit = () => {
		let errors = validateFields();
		console.warn(errors);
		if (Object.keys(errors).length === 0) {
			console.warn(values);
		}
	};

	const validateFields = () => {
		console.info(CNAME, 'handleFormSubmit'); let valid = false;
		let keys = Object.keys(values);

		valid = keys
			.reduce((prev, curr) => {
				let newCurr;
				if (
					curr &&
					values[curr] &&
					values[curr].value === '' &&
					values[curr].validators &&
					(values[curr].validators.indexOf('required') >= 0)) {

					newCurr = {
						[curr]: { label: values[curr].label, error: 'Required' }
					};
				}

				return {
					...prev,
					...newCurr
				};
			}, {});
		return valid;
	};

	return (
		<div className="p-4">
			<div className="form-group">
				<label>
					{values.firstName.label}
				</label>
				<input
					name="firstName"
					className="form-control"
					placeholder="Firstname"
					onChange={handleInputChange}
					value={values.firstName.value}
				/>
			</div>

			{/* <button className="btn btn btn-outline-secondary" onClick={onHandleClose}>
				abbrechen
			</button> */}

			<button className="btn btn btn-primary" onClick={handleFormSubmit}>
				save
			</button>
		</div>
	);
};