import './TourCrd.css';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const TourCrd = ({ tour }) => {
    const { _id, title, city, price, featured , photo} = tour;

    // Constructing the path to the photo assuming it's in the correct folder
    // eslint-disable-next-line no-undef
    const path = (`../assets/besbes/${photo}`).default;
    return (
        <div className='tour__card'>
            <Card style={{ width: '300px', height: '350px' }}>
                <div className='tour__img'>
                    <img src={path} alt="Tour" />
                    {featured && <span>Featured</span>}
                </div>
                <CardBody>
                    <div className='card__top d-flex align-items-center justify-content-between'>
                        <span className='tour__location d-flex align-items-center gap-1'>
                            <i className="ri-map-pin-4-line"></i>{city}
                        </span>
                        {/* You can add a rating component here once you have the rating logic */}
                        {/* <span className='tour__rating d-flex align-items-center gap-1'>
                            <i className="ri-star-line"></i>
                        </span> */}
                    </div>
                    <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>
                    <div className="card__bottom d-flex align-items-center ">
                        <h5>{price} <span>per person</span></h5>
                        <button className='btn booking__btn'>
                            <Link to={`/tours/${_id}`}>Book Now</Link>
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
        featured: PropTypes.bool.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
};

export default TourCrd;


// {avgRating ===0 ? null : avgRating} ({totalRating === 0 ? "Not rated" : reviews.length})