export const authUser = async (
	userName,
	action,
	setLoading,
	setError,
	history
) => {
	if (userName.trim().length > 3 && userName.trim().length < 25) {
		try {
			setLoading(true);
			await action(userName.trim());
			history.push('/translate');
		} catch (error) {
			if (error.code === 'auth/invalid-email') {
				setError('The username was not valid');
			} else {
				setError(error.code);
			}
		} finally {
			setLoading(false);
		}
	} else {
		setError('Username must be between 4 and 24 characters long');
	}
};
