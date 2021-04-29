import React from 'react';
import { trimUsername } from '../../util/trimUsername';
import { useAuth } from '../../context/AuthContext';

export const HomeAuth = () => {
	const { currentUser, logout } = useAuth();
	return (
		<div className="login-container rounded shadow d-flex container justify-content-center flex-column align-items-center bg-white">
			<p className="response-text">
				You are currently logged in as {trimUsername(currentUser.email)}
			</p>
			<hr />
			<button className="btn btn-warning" onClick={() => logout()}>
				Log out
			</button>
		</div>
	);
};
