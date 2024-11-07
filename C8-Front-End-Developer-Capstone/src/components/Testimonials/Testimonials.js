import styles from "./Testimonials.module.css";
import customer1 from "../../peopleImg/customer1.jpeg";
import customer2 from "../../peopleImg/customer2.jpeg";
import customer3 from "../../peopleImg/customer3.jpeg";
import customer4 from "../../peopleImg/customer4.jpeg";
import star from "../../icons_assets/star.svg";

const rating = [
    {
        id: customer1,
        rating: 4,
        name: "Anothony",
        img: customer1,
        review: "The food is delicious and the place has a very cozy and warm atmosphere!",
    },
    {
        id: customer2,
        rating: 3,
        name: "Rebecca",
        img: customer2,
        review: "I had a lovely experience! The workers were very welcoming and the food was great.",
    },
    {
        id: customer3,
        rating: 4,
        name: "Jordan",
        img: customer3,
        review: "The dishes were flavorful and delicious! Best Mediterranean food I've had in a while.",
    },
    {
        id: customer4,
        rating: 5,
        name: "Tom",
        img: customer4,
        review: "This is my favorite spot! The staff is friendly, and the vareity of options on the mnu keep sme coming back!",
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h3>TESTIMONIALS</h3>
            <ul className={styles.reviewContainer}>
                {rating.map((reviews) => (
                    <li key={reviews.id} className={styles.reviewList}>
                        {[...Array(reviews.rating)].map((_, index) => (
                            <img key={index} src={star} alt="star icon" className={styles.starIcon} width="20px" height="20px" />
                        ))}

                        <div className={styles.descriptionContainer}>
                            <img src={reviews.img} alt={reviews.name} width="auto" height="80px" />
                            <span className={styles.textContainer}>
                                <h6>{reviews.name}</h6>
                                <p>{reviews.review}</p>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Testimonials;