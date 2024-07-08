import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
import ThankYou from '../Pages/ThankYou'

const Routers = () => {
    return (
        <Routes>
            {/* Use lowercase path names */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tours/search" element={<SearchResultList />} />
            <Route path='/thank-you' element={<ThankYou />}></Route>
        </Routes>
    );
}

export default Routers;
