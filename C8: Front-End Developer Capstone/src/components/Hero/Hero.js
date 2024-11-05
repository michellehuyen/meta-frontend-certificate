import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import foodImg from "../../foodImg/restaurantfood.jpg";
import '../../App.css';

const Hero = () => {
    return (
        <section className={`${styles.hero} globalGridContainer`}>
            <div className={styles.textContainer}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                
                <img src={foodImg} alt="restaurant food" className="mobileImg" />

                <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        The chefs draw inspiration from <em>Italian</em>, <em>Greek</em>, and <em>Turkish</em> culture and have a menu of 12–15 items that they rotate seasonally.
                </p>
                <Link to="/booking">
                    <button type="button" id="reserveBtn">Reserve a table</button>
                </Link>
            </div>

            <img src={foodImg} alt="restaurant food" className="desktopImg" width="250px" height="auto" />
        </section>
    )
}

export default Hero;