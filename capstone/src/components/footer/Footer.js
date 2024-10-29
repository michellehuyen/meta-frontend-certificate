import logo from "../../icons_assets/footer-logo.png";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Little Lemon Logo" width="auto" height="150px" />

            <div className={styles.footerCol}>
                <h4>Navigation Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h4>Contact</h4>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone Number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>

            <div className={styles.footerCol}>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;