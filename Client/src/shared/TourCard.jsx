import './TourCrd.css';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Imgohi from '../assets/besbes/aerial-view-lyon-from-top-notre-dame-de-fourviere.jpg'
import CalculateAvgRating from "./../utils/AvgRatingCalculate"

const TourCrd = ({ tour }) => {
    const { _id, title, city, price, hello , reviews  } = tour;
    const {totalRating , avgRating} = CalculateAvgRating(reviews)

    // Constructing the path to the photo assuming it's in the correct folder
    // eslint-disable-next-line no-undef
   // const path = (`../assets/besbes/${photo}`).default;
    return (
        <div className='tour__card'>
            <Card style={{ 
    width: '300px', 
    height: '350px',
    maxWidth: '100%', // Ensures the card takes full width when viewport is smaller
    margin: 'auto',   // Centers the card horizontally
    '@media (max-width: 500px)': { // Media query for viewport width <= 500px
        width: '100%', // Sets the width to 100% for smaller screens
    } 
}}>
                <div className='tour__img'>
                    <img src={Imgohi} alt="Tour" />
                    {hello && <span>Featured</span>}
                </div>
                <CardBody>
                    <div className='card__top d-flex align-items-center justify-content-between'>
                        <span className='tour__location d-flex align-items-center gap-1'>
                            <i className="ri-map-pin-4-line"></i>{city}
                        </span>
                        <span>                          
                        <i className="ri-star-line"></i>
                        {avgRating ===0 ? null : avgRating} ({totalRating === 0 ? "Not rated" : reviews.length})
                        </span>
                    </div>
                    <h5 className="tour__title"><Link to={`/tours/tour/${_id}`}>{title}</Link></h5>
                    <div className="card__bottom d-flex align-items-center ">
                        <h5>{price} <span>per person</span></h5>
                        <button className='btn booking__btn'>
                            <Link to={`/tours/tour/${_id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

TourCrd.propTypes = {
    tour: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        hello: PropTypes.bool.isRequired,
        photo: PropTypes.string.isRequired,
        distance : PropTypes.number.isRequired,
        maxGroupSize : PropTypes.number.isRequired,
        reviews : PropTypes.arrayOf({
            username: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            reviewTesxt : PropTypes.string.isRequired,
            productId: PropTypes.object.isRequired, // Assuming it's a string ObjectId
        }).isRequired
    }).isRequired,
};

export default TourCrd;


// {avgRating ===0 ? null : avgRating} ({totalRating === 0 ? "Not rated" : reviews.length})