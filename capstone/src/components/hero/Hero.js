import styles from "./styles.module.css";
import foodImg from "../../icons_assets/restaurantfood.jpg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>

                <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        The chefs draw inspiration from <em>Italian</em>, <em>Greek</em>, and <em>Turkish</em> culture and have a menu of 12–15 items that they rotate seasonally.
                </p>

                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>

            </div>

            
            <img src={foodImg} alt="restaurant food" width="300px" height="auto" />
        </section>
    )
}

export default Hero;