import styles from "./Nav.module.css";
import { HashLink } from 'react-router-hash-link';
import logo from "../../icons_assets/Logo.svg";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Little Lemon Logo" />
            <ul className={styles.ul}>
                <li><HashLink to="/">Home</HashLink></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#menu">Menu</HashLink></li>
                <li><HashLink to="/reservations">Reservations</HashLink></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;