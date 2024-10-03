import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import TourCard from "../../shared/TourCard";

const FeaturedTours = () => {
    const { data: featuredTours, error, loading } = useFetch(`https://travelwebsiteserver.onrender.com/tours/featured`);

    if (loading) {
        return <p>Loading...</p>; // Display a loading indicator while fetching data
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Display an error message if fetching fails
    }

    return (
        <>
            {featuredTours && featuredTours.map((tour) => (
                <Col lg='3' md='4' sm='12' className='mb-4' key={tour._id}>
                    <TourCard tour={tour}></TourCard>
                </Col>
            ))}
        </>
    );
};

export default FeaturedTours;
