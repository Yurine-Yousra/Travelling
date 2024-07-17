import '../styles/tourdetails.css';
import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row, Col, ListGroup, Form } from 'reactstrap';
import CalculateAvgRating from '../utils/AvgRatingCalculate';
import avatar from '../assets/besbes/5907.jpg';
import Booking from '../components/Booking/Booking';
import UseFetch from '../hooks/useFetch'
import {AuthContext} from '../context/AuthContext'

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef(null); // Initialize useRef with null
    const [tour, setTour] = useState(null);
    const [tourRating, setTourRating] = useState(null);
    const {user } = useContext(AuthContext)
    const { data: tourData, loading, error } = UseFetch(`http://localhost:8000/tours/tour/${id}`);
    
    useEffect(() => {
        if (tourData) {
            setTour(tourData);
        }
    }, [tourData]);

    const {title, desc, price, reviews, city, maxGroupSize, distance , photo } = tour || {};

    const { totalRating, avgRating } = CalculateAvgRating(reviews);
    // Format date
    const options = { day: "numeric", month: "long", year: "numeric" };

    const submitHandler = async(e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
        try {
            if(!user || user === undefined || user === null){
                alert("please do sign in")
            }

            const reviewObj = {
                username : user.username,
                reviewText,
                rating :tourRating
            }

            console.log(reviewObj)

            const res = await fetch(`http://localhost:8000/reviews/${id}` , {
                method :'post',
                headers : {
                    "Content-Type" : "Application/json"
                                },
                reviewObj : "include",
                body :JSON.stringify(reviewObj)
            })
           
            const result = await res.json()


            if(!res.ok){
                alert(result.message)
            }

            alert(result.message)

            alert(result.message)
        }
        catch(err){
            console.log(err)
        }
    };

    

    return (
        <>
            <section>
                <Container>
                    {loading && <h4 className='text-center'>Loading ...</h4>}
                    {error && <h4 className='text-center'>{error}</h4>}
                    {!loading && !error && tour && (
                        <Row>
                            <Col lg='8'>
                                <div className='tour__content'>
                                    <img src={photo} alt="" />
                                    <div className="tour__info">
                                        <h2>{title}</h2>
                                        <div className="d-flex align-items-center justify-content-start gap-4">
                                            <span className='tour__rating d-flex align-items-center gap-1'>
                                                <i className="ri-star-line" style={{ color: "var(--secondary-color)" }}></i>
                                                {avgRating === 0 ? null : avgRating} ({totalRating === 0 ? "Not rated" : reviews.length})
                                            </span>
                                            <span><i className="ri-gps-line" style={{ color: "var(--secondary-color)" }}></i>{city}</span>
                                        </div>
                                        <div className="tour__extra-details d-flex aligin-items-center justify-content-start gap-4">
                                            <span><i className="ri-map-pin-line"></i>{city}</span>
                                            <span><i className="ri-money-dollar-circle-line"></i>{price}$</span>
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
                                                <div className="review__item" key={review._id}>
                                                    <img src={avatar} alt="" />
                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>{review.reviewText}</h5> {/* Assuming review has a 'name' property */}
                                                                <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>                                                         
                                                            </div>
                                                            <span className='d-flex align-items-center '>
                                                                {review.rating} <i className="ri-star-line"></i>
                                                            </span>
                                                        </div>
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
                    )}
                </Container>
            </section>
        </>
    )
}

export default TourDetails;
