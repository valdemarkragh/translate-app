import React from 'react';
import { Container } from 'react-bootstrap';
import { SignOutput } from '../Global/SignOutput/SignOutput';

export const TranslationOutput = ({ message }) => {
	return (
		<Container className="translation-container d-flex flex-column justify-content-center align-items-center">
			<div className="translation-output shadow">
				<div className="translation-output-main">
					{message.length ? <SignOutput message={message} /> : ''}
				</div>
				<div className="translation-output-footer">
					<span className="font-weight-bold">Translation</span>
				</div>
			</div>
		</Container>
	);
};
