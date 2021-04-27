import React, { Fragment } from 'react';

export const Input = ({ placeholder, value, setValue }) => {
	return (
		<Fragment>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</Fragment>
	);
};
