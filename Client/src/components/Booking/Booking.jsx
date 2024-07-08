import './Booking.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom'
const Booking = ({ tour, AvgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate()
    const [credentials , setCredentials] = useState({
        userId : '0123',
        userEmail : 'yousrabouhrizdaidj@gmail.com',
        fullName:'bouhriz daidj yousra',
        phone :'',
        guestSize:1,
        bookAt:''
    })

    const handelChange = (e) => {
        setCredentials(prev =>({...prev , [e.target.id]:e.target.value}))
    }

    const handelClick = e => {
        e.preventDefault();
        console.log(credentials)
        navigate("/thank-you")
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    return (
        <div className='Booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>{price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i className="ri-star-line" style={{ color: "var(--secondary-color)" }}></i>
                    {AvgRating === 0 ? null : AvgRating} ({reviews?.length})
                </span>
            </div>
            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handelClick}>
                    <FormGroup>
                        <input type="text" placeholder='fullName' id='fullName' required onChange={handelChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handelChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="date" placeholder='' id='bookAt' required onChange={handelChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder='' id='guestSize' required onChange={handelChange} />
                    </FormGroup>
                </Form>
            </div>
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>{price} <i className='ri-close-line'></i>1 person</h5>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className=' border-0 px-0 '>
                        <h5 className='total'>Total</h5>
                        <span className='total'>${totalAmount}</span>
                    </ListGroupItem>
                    <Button className='btn primary__btn w-100 mt-4' onClick={handelClick}>Submit</Button>
                </ListGroup>
            </div>
        </div>
    );
};

Booking.propTypes = {
    tour: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        maxGroupSize: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
            })
        ).isRequired,
        avgRating: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        featured: PropTypes.bool.isRequired,
    }).isRequired,
    AvgRating: PropTypes.number.isRequired, // Assuming AvgRating is a calculated number
};

export default Booking;
