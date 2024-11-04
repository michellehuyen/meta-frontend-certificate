import styles from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, selectedDate, onDateChange, submitForm }) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        date: new Date().toISOString().split('T')[0],
        time: '',
        guests: 1,
        occasion: ''
    };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const validationSchema = Yup.object({
            firstName: Yup.string().required("*First name is required"),
            lastName: Yup.string().required("*Last name is required"),
            email: Yup.string().required("*Email is required").email("Invalid email"),
            date: Yup.date().required("*Date is required").min(today, "Date cannot be in the past"),
            time: Yup.string().required("*Reservation time required"),
            guests: Yup.number().required("*Number of guests is required")
            .integer("*Number of guests must be an integer")
            .min(1, "*Number of guests must be at least 1")
            .max(8, "*Max number of guests is 10")
    });

    const handleSubmit = (values) => {
        submitForm(values);
        console.log(values);
    }

    const handleDateChange = (event) => {
        const date = event.target.value;
        onDateChange(date);
    }

    return (
        <section className={styles.formContainer}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className={styles.form}>
                    <h1>Reserve a Table</h1>
                    <div className={styles.nameContainer}>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="firstName">First Name</label>
                            <Field className={styles.field} id="firstName" type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="div" className={styles.error} />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label htmlFor="lastName">Last Name</label>
                            <Field className={styles.field} id="lastName" type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" className={styles.error} />
                        </div>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label htmlFor="email">Email</label>
                        <Field className={styles.field} id="email" type="email" name="email" />
                        <ErrorMessage name="email" component="div" className={styles.error} />
                    </div>

                    <div className={styles.fieldContainer}>
                        <label htmlFor="date">Choose a Date</label>
                        <Field className={styles.field} id="date" type="date" name="date" value={selectedDate} onChange={handleDateChange} />
                        <ErrorMessage name="date" component="div" className={styles.error} />
                    </div>

                    <div className={styles.fieldContainer}>
                        <label htmlFor="time">Choose a Time</label>
                        <Field className={styles.field} id="time" as="select" name="time">
                            {availableTimes.map((times) => (
                                <option key={times} value={times}>{times}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className={styles.error} />
                    </div>

                    <div className={styles.fieldContainer}>
                        <label htmlFor="guests">Number of Guests</label>
                        <Field className={styles.field} id="guests" type="number" name="guests" min="1" max="10" />
                        <ErrorMessage name="guests" component="div" className={styles.error} />
                    </div>

                    <div className={styles.fieldContainer}>
                        <label htmlFor="occasion">Occasion</label>
                        <Field className={styles.field} id="occasion" as="select" name="occasion">
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="occasion" component="div" className={styles.error} />
                    </div>

                    <button type="submit">Make Your Reservation</button>
                </Form>
            </Formik>
        </section>
    );
}

export default BookingForm;