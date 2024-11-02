import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';
import logo from "../../icons_assets/footer_logo.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Little Lemon Logo" width="auto" height="150px" />

            <div className={styles.footerCol}>
                <h4>Navigation Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h4>Contact</h4>
                <ul>
                    <li>12345 SW Little Lemon St.</li>
                    <li>+1 (012)-345-6789</li>
                    <li>littlelemon@gmail.com</li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h4>Social Media Links</h4>
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