import { useReducer } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";

const initializeTimes = () => {
    // creating Date object for today's date
    const today = new Date().toISOString().split('T')[0];

    return {
        selectedDate: today,
        availableTimes: fetchAvailableTimes(today) // fetch times
    };
}

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
                // spread previous state to maintain other state properties
                ...state,
                // update selected date
                selectedDate: action.payload,
                // update availableTimes property by fetching new times
                availableTimes: fetchAvailableTimes(action.payload)
            };
        default:
            return state;
    }
}

const fetchAvailableTimes = (date) => {
    const result = [];

    for (let i = 10; i <= 20; i++) {
        if (Math.random() < 0.3) {
            result.push(`${i}:00`);
        }
        if (Math.random() > 0.3 && Math.random() < 0.5){
            result.push(`${i}:45`);
        }
        else if (Math.random() > 0.5) {
            result.push(`${i}:30`);
        }
    }
    return result
}

const BookingPage = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());

    const updateAvailableTimes = (date) => {
        dispatch({
            type: "UPDATE_TIMES",
            payload: date
        })
    }

    const validateAndSubmit = (formData) => {
        if (!formData) return false;
        return true;
    }

    const submitForm = (formData) => {
        const isSubmitted = validateAndSubmit(formData);
        if (isSubmitted) {
            console.log(formData);
        }
    }

    return (
        <>
            <BookingForm availableTimes={state.availableTimes} selectedDate={state.selectedDate} onDateChange={updateAvailableTimes} submitForm={submitForm} />
        </>
    );
}

export default BookingPage;