import styles from "./Menu.module.css";
import greekSalad from "../../foodImg/greek_salad.jpg";
import bruchetta from "../../foodImg/bruchetta.svg";
import lemonDessert from "../../foodImg/lemon_dessert.jpg";
import foodDelivery from "../../icons_assets/food_delivery.png";

const menuList = [
    {
        id: 1,
        name: "Greek Salad",
        price: "$12.99",
        img: greekSalad,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        name: "Bruchetta",
        price: "$7.99",
        img: bruchetta,
        description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: "$5.00",
        img: lemonDessert,
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }
];

const Menu = () => {
    return (
        <section className={styles.menu}>
            <span className={styles.sectionTitle}>
                <h3>THIS WEEKS SPECIAL!</h3>
                <button type="button">Online Menu</button>
            </span>

            <ul className={styles.menuContainer}>
                {menuList.map((menuItem) => (
                    <li key={menuItem.id} className={styles.menuItem}>
                        <img src={menuItem.img} alt={menuItem.name} />
                        <span className={styles.dishInfo}>
                            <h2>{menuItem.name}</h2>
                            <span className="price">{menuItem.price}</span>
                        </span>
                        <p>{menuItem.description}</p>
                        
                        <span className={styles.deliveryText}>
                            <p>Order a delivery</p>
                            <img src={foodDelivery} alt="food delivery icon" style={{width: "25px", height: "25px"}} />
                        </span>
                    </li>

                ))}
            </ul>

        </section>
    );
}

export default Menu;