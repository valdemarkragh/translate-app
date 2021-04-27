import React from 'react';
import { trimUserName } from '../../util/TrimUsername';
import { useAuth } from '../../context/AuthContext';

export const StartupAuth = () => {
	const { currentUser, logout } = useAuth();
	return (
		<div className="login-input rounded shadow d-flex container justify-content-center flex-column align-items-center bg-white">
			<p className="response-text">
				You are already logged in as {trimUserName(currentUser.email)}
			</p>
			<hr />
			<button className="btn btn-warning" onClick={() => logout()}>
				Log out
			</button>
		</div>
	);
};
