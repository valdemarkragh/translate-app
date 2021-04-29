import { Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { trimUsername } from '../../../util/trimUsername';

export const HeaderUser = () => {
	const { logout, currentUser } = useAuth();
	const history = useHistory();

	const handleLogout = async () => {
		try {
			await logout();
			history.push('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Nav className="ml-auto align-items-center user-actions">
			<NavDropdown
				style={dropDownStyles}
				title={trimUsername(currentUser.email)}
				id="basic-nav-dropdown"
			>
				<Link
					className="dropdown-item user-link"
					onClick={() => {
						document.body.click();
					}}
					to="/profile"
				>
					Profile
				</Link>
				<Link
					className="dropdown-item user-link"
					onClick={() => {
						document.body.click();
					}}
					to="/translate"
				>
					Translate
				</Link>
				<button className="dropdown-item user-link" onClick={handleLogout}>
					Log out
				</button>
			</NavDropdown>
			<i className="bi bi-person-circle user-icon"></i>
		</Nav>
	);
};

const dropDownStyles = {
	left: '-10px',
};
