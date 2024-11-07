import styles from "./About.module.css";
import chefImgB from "../../peopleImg/chefs_B.jpg";
import '../../App.css';

const About = () => {
    return (
        <section className={`${styles.about} globalGridContainer`}>
            <div className={styles.textContainer}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <img src={chefImgB} alt="Second picutre of Mario and Adrian" className="mobileImg" />

                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <img src={chefImgB} alt="Second picutre of Mario and Adrian" className="desktopImg" width="350px" height="auto" />
        </section>
    )
}

export default About;