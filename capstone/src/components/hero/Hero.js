import styles from "./styles.module.css";
import foodImg from "../../foodImg/restaurantfood.jpg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <span>
                    <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            The chefs draw inspiration from <em>Italian</em>, <em>Greek</em>, and <em>Turkish</em> culture and have a menu of 12–15 items that they rotate seasonally.
                    </p>
                </span>
                <button type="button">Reserve a table</button>

            </div>

            <img src={foodImg} alt="restaurant food" width="250px" height="auto" />
        </section>
    )
}

export default Hero;