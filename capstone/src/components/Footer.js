import logo from "../icons_assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />

            <div className="footer-column">
                <h4>Navigation Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone Number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>

            <div className="footer-column">
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