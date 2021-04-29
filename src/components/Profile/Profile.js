import { Fragment } from 'react';
import { useTranslations } from '../../context/TranslationsContext';
import { Container, ListGroup } from 'react-bootstrap';
import { ProfileTranslation } from './ProfileTranslation';

export const Profile = () => {
	const { translations } = useTranslations();

	return (
		<Fragment>
			<Container fluid className="sub-page-container">
				<Container className="sub-page-input d-flex justify-content-center flex-column align-items-center">
					<h1 className="title" style={titleStyles}>
						Your recent translations
					</h1>
					<h4 className="title">Click on a message to view translation</h4>
				</Container>
			</Container>
			<Container className="translation-container d-flex flex-column justify-content-center align-items-center">
				<ListGroup
					style={listStyles}
					className={`shadow ${
						!translations.length && 'justify-content-center align-items-center'
					}`}
				>
					{translations.length ? (
						translations.map(translation => (
							<ProfileTranslation
								key={translation.id}
								id={translation.id}
								message={translation.message}
							/>
						))
					) : (
						<p className="response-text">
							You dont have any translations at the moment
						</p>
					)}
				</ListGroup>
			</Container>
		</Fragment>
	);
};

const listStyles = {
	width: '80%',
	height: '50vh',
};

const titleStyles = {
	fontSize: '3.5rem',
};
