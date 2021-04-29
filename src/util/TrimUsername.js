export const trimUsername = userName => {
	return userName.slice(0, userName.lastIndexOf('@'));
};
