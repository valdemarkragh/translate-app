import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = userName => {
		return auth.createUserWithEmailAndPassword(
			userName + '@translate-app.com',
			'translate-app'
		);
	};

	const login = userName => {
		return auth.signInWithEmailAndPassword(
			userName + '@translate-app.com',
			'translate-app'
		);
	};

	const logout = () => {
		return auth.signOut();
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
