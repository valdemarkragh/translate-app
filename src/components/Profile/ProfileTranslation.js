import React, { Fragment, useState } from 'react';
import { useTranslations } from '../../context/TranslationsContext';
import { ListGroup } from 'react-bootstrap';
import { ProfileModal } from './ProfileModal';

export const ProfileTranslation = ({ id, message }) => {
	const { deleteTranslation } = useTranslations();
	const [show, setShow] = useState(false);

	const deleteHandler = e => {
		e.stopPropagation();
		deleteTranslation(id);
	};

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<Fragment>
			<ListGroup.Item
				className="d-flex justify-content-between align-items-center translation-item"
				onClick={handleShow}
			>
				{message}
				<i
					className="bi bi-x-circle-fill delete-icon"
					onClick={deleteHandler}
				></i>
			</ListGroup.Item>
			{show && (
				<ProfileModal show={show} handleClose={handleClose} message={message} />
			)}
		</Fragment>
	);
};
