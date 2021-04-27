import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

import { StartupHero } from './StartupHero';
import { StartupLoginForm } from './StartupLoginForm';
import { StartupAuth } from './StartupAuth';

export const StartupRegister = () => {
	const [userName, setUserName] = useState('');
	const [loading, setLoading] = useState(false);
	const { signup, currentUser } = useAuth();
	const history = useHistory();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			setLoading(true);
			await signup(userName);
			history.push('/translation');
		} catch (error) {
			console.log(error.code);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		return () => {
			setUserName('');
		};
	}, [history]);

	return (
		<Container fluid className="login-container">
			<Container className="sub-login-container d-flex justify-content-center align-items-center">
				<StartupHero path={'/'} link={'Already got a user?'} />
			</Container>
			{!currentUser ? (
				<StartupLoginForm
					handleSubmit={handleSubmit}
					userName={userName}
					setUserName={setUserName}
					loading={loading}
				/>
			) : (
				<StartupAuth />
			)}
		</Container>
	);
};
