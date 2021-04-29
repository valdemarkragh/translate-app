import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { TranslationsProvider } from '../context/TranslationsContext';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	return (
		<Route
			{...rest}
			render={props => {
				return currentUser ? (
					<TranslationsProvider>
						<Component {...props} />
					</TranslationsProvider>
				) : (
					<Redirect to="/" />
				);
			}}
		></Route>
	);
};
