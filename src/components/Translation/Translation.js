import React, { useState, Fragment } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Container } from 'react-bootstrap';
import { TranslationsAPI } from '../../api/TranslationsAPI';

import { Input } from '../Input/Input';

export const Translation = () => {
	const { currentUser } = useAuth();
	const [input, setInput] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const translation = {
			uid: currentUser.uid,
			message: input,
			deleted: false,
		};
		try {
			await TranslationsAPI.addTranslation(translation);
			setMessage(input);
		} catch (error) {
			console.log(error);
		} finally {
			setInput('');
		}
	};

	const RenderTranslation = () => {
		return message.split('').map((char, index) => {
			return (
				<img
					key={index}
					className="sign-image"
					src={process.env.PUBLIC_URL + `/signs/${char}.png`}
					alt="translate-img"
				/>
			);
		});
	};

	return (
		<Fragment>
			<Container fluid className="translation-container">
				<Container className="translation-input d-flex justify-content-center align-items-center">
					<form onSubmit={handleSubmit}>
						<Input
							placeholder={'Text to be translated'}
							value={input}
							setValue={setInput}
						/>
					</form>
				</Container>
			</Container>
			<Container className="translation-sub-container d-flex flex-column justify-content-center align-items-center">
				<div className="translation-output shadow">
					<div className="translation-output-main">
						{message.length ? <RenderTranslation /> : ''}
					</div>
					<div className="translation-output-footer">
						<span className="font-weight-bold">Translation</span>
					</div>
				</div>
			</Container>
		</Fragment>
	);
};
