import React from 'react';

export const SignOutput = ({ message }) => {
	return message.split('').map((char, index) => {
		if (char !== ' ') {
			return (
				<img
					key={index}
					className="sign-image"
					src={process.env.PUBLIC_URL + `/signs/${char}.png`}
					alt="translate-img"
				/>
			);
		}
		return <p></p>;
	});
};
