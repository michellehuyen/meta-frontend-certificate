import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";

export const initializeTimes = () => {
    // creating Date object for today's date
    const today = new Date();

    return {
        selectedDate: today.toISOString().split('T')[0],
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

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    if (!formData) return false;
    return true;
};

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
            navigate("/booking-confirmation", { state: formData });
        }
    }

    return (
        <>
            <BookingForm availableTimes={state.availableTimes} selectedDate={state.selectedDate} onDateChange={updateAvailableTimes} submitForm={submitForm} />
        </>
    );
}

export default BookingPage;