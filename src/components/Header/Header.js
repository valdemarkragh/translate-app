import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { trimUserName } from "../../util/TrimUsername";

export const Header = () => {
    const { currentUser } = useAuth();

    return (
        <Navbar expand='lg' className='header'>
            <Container>
                <Link className='navbar-brand title' to='/'>
                    Lost in Translation
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {currentUser && (
                        <Nav className='ml-auto'>
                            <Link className='nav-link' to='/profile'>
                                {trimUserName(currentUser.email)}
                            </Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};