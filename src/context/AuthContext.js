import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = userName => {
		return auth.createUserWithEmailAndPassword(
			userName + process.env.REACT_APP_USER_EMAIL,
			process.env.REACT_APP_USER_PASSWORD
		);
	};

	const login = userName => {
		return auth.signInWithEmailAndPassword(
			userName + process.env.REACT_APP_USER_EMAIL,
			process.env.REACT_APP_USER_PASSWORD
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
}
