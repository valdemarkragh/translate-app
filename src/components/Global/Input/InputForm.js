import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import Spinner from 'react-bootstrap/Spinner';
import { InputModal } from './InputModal';

export const InputForm = ({
	handleSubmit,
	inputData,
	setInputData,
	loading,
	placeholderText,
	error,
	setError,
}) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (error.length) {
			setShow(true);
		}
	}, [error]);

	return (
		<form style={formStyles} onSubmit={handleSubmit}>
			{show && <InputModal error={error} show={show} setShow={setShow} />}
			<Input
				placeholder={placeholderText}
				value={inputData}
				setValue={setInputData}
				setError={setError}
			/>
			{!loading ? (
				<i
					className="bi bi-arrow-right-circle-fill submit-icon"
					onClick={handleSubmit}
				></i>
			) : (
				<Spinner style={spinnerStyles} animation="border" />
			)}
		</form>
	);
};

const spinnerStyles = {
	position: 'absolute',
	top: '30%',
	right: '35px',
	width: '3rem',
	height: '3rem',
	color: '#845ec2',
};

const formStyles = {
	width: '80%',
	position: 'relative',
};
