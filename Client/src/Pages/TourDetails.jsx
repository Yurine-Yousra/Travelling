import '../styles/tourdetails.css';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Container, Row, Col, ListGroup, Form } from 'reactstrap';
//import CalculateAvgRating from '../utils/AvgRatingCalculate';
import avatar from '../assets/besbes/5907.jpg';
import Booking from '../components/Booking/Booking';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef(null); // Initialize useRef with null
    const [tourRating, setTourRating] = useState(null);
    const { data: AllTours  ,error, loading } = useFetch(`${BASE_URL}/tours/AllTours`);
    console.log(AllTours)

    if (loading) {
        return <p>Loading...</p>; // Display a loading indicator while fetching data
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Display an error message if fetching fails
    }

    // Find the tour by id
    const tour = AllTours.find(tour => tour._id === id);

    // Handle case when tour is not found
    if (!tour) {
        return <p>Tour not found</p>; // Adjust this according to your application's error handling
    }

    const { photo, title, desc, price, reviews, city, maxGroupSize, distance } = tour;
   // const { totalRating, avgRating } = CalculateAvgRating(reviews);

    // Format date
    const options = { day: "numeric", month: "long", year: "numeric" };

    const submitHandler = (e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
        alert(`${reviewText} , ${tourRating}`);
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className='tour__content'>
                                <img src={photo} alt="" />
                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center justify-content-start gap-4">
                                        <span className='tour__rating d-flex align-items-center gap-1'>
                                            <i className="ri-star-line" style={{ color: "var(--secondary-color)" }}></i>
                                        </span>
                                        <span><i className="ri-gps-line" style={{ color: "var(--secondary-color)" }}></i>{city}</span>
                                    </div>
                                    <div className="tour__extra-details d-flex aligin-items-center justify-content-start gap-4">
                                        <span><i className="ri-map-pin-line"></i>{city}</span>
                                        <span><i className="ri-money-dollar-circle-line"></i>{price}</span>
                                        <span><i className="ri-pin-distance-line" style={{ color: "var(--secondary-color)" }}></i>{distance} k/m</span>
                                        <span><i className="ri-group-line"></i>{maxGroupSize}</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews?.length} reviews )</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <span key={num} onClick={() => setTourRating(num)}>
                                                    <i className="ri-star-line"></i> {num}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="review__input">
                                            <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                                            <button className='btn primary__btn text-white' type='submit'>Submit</button>
                                        </div>
                                    </Form>

                                    <ListGroup className='user__reviews'>
                                        {reviews?.map(review => (
                                            <div className="review__item" key={review.id}>
                                                <img src={avatar} alt="" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>{review.name}</h5> {/* Assuming review has a 'name' property */}
                                                            <p>
                                                                {new Date(review.date).toLocaleDateString("en-Us", options)}
                                                            </p>
                                                        </div>
                                                        <span className='d-flex align-items-center '>
                                                            {review.rating} <i className="ri-star-line"></i>
                                                        </span>
                                                    </div>
                                                    <h6>{review.comment}</h6> {/* Assuming review has a 'comment' property */}
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <Booking tour={tour} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TourDetails;
