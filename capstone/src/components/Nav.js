import logo from "../icons_assets/Logo.svg";
import basket from "../icons_assets/Basket.svg"

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;