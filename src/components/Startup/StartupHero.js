import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const StartupHero = ({ path, link }) => {
	const { currentUser } = useAuth();
	return (
		<div className="login-title d-flex justify-content-center align-items-center">
			<img src={process.env.PUBLIC_URL + '/images/Logo-Hello.png'} alt="logo" />
			<div>
				<h1 className="title frontpage-title">Lost in Translation</h1>
				<h2 className="title mb-5">Get started</h2>
				{!currentUser && (
					<Link to={path} className="register-link">
						{link}
					</Link>
				)}
			</div>
		</div>
	);
};
