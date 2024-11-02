import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import BookingPage from '../../pages/BookingPage/BookingPage';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
    );
}

export default Main;