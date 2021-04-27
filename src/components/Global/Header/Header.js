import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { trimUserName } from "../../../util/TrimUsername";
import { useHistory } from "react-router-dom";

export const Header = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await logout();
            history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Navbar style={navStyles} expand='lg' className='header shadow-sm'>
            <Container>
                <Link
                    className='navbar-brand title'
                    style={navBarBrandStyles}
                    to='/'>
                    Lost in Translation
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {currentUser && (
                        <Nav className='ml-auto align-items-center user-actions'>
                            <NavDropdown
                                style={dropDownStyles}
                                title={trimUserName(currentUser.email)}
                                id='basic-nav-dropdown'>
                                <Link
                                    className='dropdown-item user-link'
                                    to='/profile'>
                                    Profile
                                </Link>
                                <Link
                                    className='dropdown-item user-link'
                                    to='/translate'>
                                    Translate
                                </Link>
                                <button
                                    className='dropdown-item user-link'
                                    onClick={handleLogout}>
                                    Log out
                                </button>
                            </NavDropdown>
                            <i className='bi bi-person-circle user-icon'></i>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const dropDownStyles = {
    left: "-10px",
};

const navStyles = {
    zIndex: "5",
};

const navBarBrandStyles = {
    fontSize: "2.25rem",
};
