export const trimUserName = (userName) => {
    return userName.slice(0, userName.lastIndexOf("@"));
};
