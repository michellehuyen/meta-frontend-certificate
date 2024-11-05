import styles from "./Header.module.css";
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../icons_assets/Logo.svg";

const Header = () => {
    return (
        <Navbar bg="white" data-bs-theme="light" expand="lg" className={styles.nav}>
            <Container className={styles.navContainer}>
                <Navbar.Brand as={HashLink} to="/">
                    <img src={logo} alt="Little Lemon Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.navList}>
                        <Nav.Link as={HashLink} to="/" className={styles.navLink}>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/#about" className={styles.navLink}>About</Nav.Link>
                        <Nav.Link as={HashLink} to="/#menu" className={styles.navLink}>Menu</Nav.Link>
                        <Nav.Link as={HashLink} to="/booking" className={styles.navLink}>Reservations</Nav.Link>
                        <Nav.Link className={styles.navLink}>Order Online</Nav.Link>
                        <Nav.Link className={styles.navLink}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;