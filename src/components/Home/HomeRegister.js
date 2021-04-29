import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { authUser } from '../../util/authUser';

import { HomeHero } from './HomeHero';
import { HomeAuth } from './HomeAuth';
import { InputForm } from '../Global/Input/InputForm';

export const HomeRegister = () => {
	const [userName, setUserName] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signup, currentUser } = useAuth();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		authUser(userName, signup, setLoading, setError, history);
	};

	useEffect(() => {
		return () => {
			setUserName('');
		};
	}, [history]);

	return (
		<Container fluid className="hero-container">
			<Container className="d-flex justify-content-center align-items-center">
				<HomeHero path={'/'} link={'Already got a user?'} />
			</Container>
			{!currentUser ? (
				<div className="login-container rounded shadow d-flex flex-column container justify-content-center align-items-center bg-white">
					<InputForm
						handleSubmit={handleSubmit}
						input={userName}
						setInputData={setUserName}
						loading={loading}
						placeholderText={"What's your name?"}
						error={error}
						setError={setError}
					/>
				</div>
			) : (
				<HomeAuth />
			)}
		</Container>
	);
};
