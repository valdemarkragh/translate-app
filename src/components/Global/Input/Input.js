import React, { Fragment } from 'react';

export const Input = ({ placeholder, value, setValue, setError }) => {
	const handleChange = e => {
		setError('');
		setValue(e.target.value);
	};
	return (
		<Fragment>
			<input
				className="form-input"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</Fragment>
	);
};
