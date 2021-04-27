import React from 'react';
import { Input } from '../Input/Input';

export const StartupLoginForm = ({
	handleSubmit,
	userName,
	setUserName,
	loading,
}) => {
	return (
		<div className="login-input rounded shadow d-flex flex-column container justify-content-center align-items-center bg-white">
			<form onSubmit={handleSubmit}>
				<Input
					placeholder={"What's your name?"}
					value={userName}
					setValue={setUserName}
				/>
			</form>
			{loading && <p>Logging in..</p>}
		</div>
	);
};
