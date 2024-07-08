import TourCard from "../../shared/TourCard";
import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedTours = () => {
    const { data: featuredTours, error, loading } = useFetch(`${BASE_URL}/tours/featuredTours`);
    console.log(featuredTours)

    if (loading) {
        return <p>Loading...</p>; // Display a loading indicator while fetching data
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Display an error message if fetching fails
    }

    return (
        <>
            {featuredTours.map((tour) => (
                <Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour}></TourCard>
                </Col>
            ))}
        </>
    );
};

export default FeaturedTours;
