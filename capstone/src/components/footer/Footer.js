import styles from "./Footer.module.css";
import { HashLink } from 'react-router-hash-link';
import logo from "../../icons_assets/footer_logo.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Little Lemon Logo" width="auto" height="150px" />

            <div className={styles.footerCol}>
                <h5>Navigation Links</h5>
                <ul>
                    <li><HashLink to="/">Home</HashLink></li>
                    <li><HashLink to="#about">About</HashLink></li>
                    <li><HashLink to="#menu">Menu</HashLink></li>
                    <li><HashLink to="/reservations">Reservations</HashLink></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h5>Contact</h5>
                <ul>
                    <li>12345 SW Little Lemon St.</li>
                    <li>+1 (012)-345-6789</li>
                    <li>littlelemon@gmail.com</li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h5>Social Media Links</h5>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;