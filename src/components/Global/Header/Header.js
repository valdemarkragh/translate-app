import { Navbar, Container } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

import { HeaderUser } from './HeaderUser';

export const Header = () => {
	const { currentUser } = useAuth();

	return (
		<Navbar style={navStyles} expand="lg" className="header shadow-sm">
			<Container>
				<Link className="navbar-brand title" style={navBarBrandStyles} to="/">
					Lost in Translation
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{currentUser && <HeaderUser />}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

const navStyles = {
	zIndex: '5',
};

const navBarBrandStyles = {
	fontSize: '2.25rem',
};
