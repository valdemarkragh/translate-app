import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const Startup = () => {
	const [name, setName] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
	};
	const handleInputChange = e => {
		setName(e.target.value);
	};
	return (
		<div className="half-vw">
			<h1>Lost in Translation</h1>
			<hr />
			<Form onSubmit={handleSubmit}>
				<Form.Control
					type="text"
					placeholder="What's your name?"
					value={name}
					onChange={handleInputChange}
				/>
			</Form>
		</div>
	);
};
