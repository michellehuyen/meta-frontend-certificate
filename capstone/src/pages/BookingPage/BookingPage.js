import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";

export const initializeTimes = () => {
    // creating Date object for today's date
    const today = new Date().toISOString().split('T')[0];

    return {
        selectedDate: today,
        availableTimes: fetchAPI(today) // fetch times
    };
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
                // spread previous state to maintain other state properties
                ...state,
                // update selected date
                selectedDate: action.payload,
                // update availableTimes property by fetching new times
                availableTimes: fetchAPI(action.payload)
            };
        default:
            return state;
    }
}

export const fetchAPI = (date) => {
    const result = [];

    for (let i = 10; i <= 20; i++) {
        if (Math.random() < 0.5) {
            result.push(`${i}:00`);
        }
        if (Math.random() < 0.5) {
            result.push(`${i}:30`);
        }
    }
    return result
}

export const submitAPI = (formData) => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.time || !formData.occasion) {
        return false;
    }
    return true;
}

const BookingPage = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const updateAvailableTimes = (date) => {
        dispatch({
            type: "UPDATE_TIMES",
            payload: date
        })
    }

    const submitForm = (formData) => {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            console.log(formData);
            navigate("/booking-confirmation");
        }
    }

    return (
        <>
            <BookingForm availableTimes={state.availableTimes} selectedDate={state.selectedDate} onDateChange={updateAvailableTimes} submitForm={submitForm} />
        </>
    );
}

export default BookingPage;