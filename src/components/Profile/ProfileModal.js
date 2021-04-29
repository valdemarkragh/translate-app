import { Button, Modal } from 'react-bootstrap';
import { SignOutput } from '../Global/SignOutput/SignOutput';

export const ProfileModal = ({ show, handleClose, message }) => {
	return (
		<>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Translation - {message}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{message && <SignOutput message={message} />}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
