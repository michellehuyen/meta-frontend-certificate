import styles from './confirmation.module.css';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <section className={styles.confirmation}>
            <h1>Your Reservation Has Been Confirmed!</h1>
            <h2>Thank you for booking with Little Lemon!</h2>
            <div className={styles.bookingDetailsContainer}>
                <h3>Booking Details</h3>
                <ul className={styles.bookingList}>
                    <li>
                        <strong>Name:</strong>
                        <span className={styles.dataContent}>{data.firstName} {data.lastName}</span>
                    </li>
                    <li>
                        <strong>Date:</strong>
                        <span className={styles.dataContent}>{data.date}</span>
                    </li>
                    <li>
                        <strong>Time:</strong>
                        <span className={styles.dataContent}>{data.time}</span>
                    </li>
                    <li>
                        <strong>Number of Guests:</strong>
                        <span className={styles.dataContent}>{data.guests}</span>
                    </li>
                    <li>
                        <strong>Occasion:</strong>
                        <span className={styles.dataContent}>{data.occasion}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ConfirmedBooking;