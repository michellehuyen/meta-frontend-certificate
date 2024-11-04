import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import BookingPage from '../../pages/BookingPage/BookingPage';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;