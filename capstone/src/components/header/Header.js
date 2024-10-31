import logo from "../../icons_assets/Logo.svg";
import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Little Lemon Logo" />
            <ul className={styles.ul}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </header>
    );
}

export default Header;