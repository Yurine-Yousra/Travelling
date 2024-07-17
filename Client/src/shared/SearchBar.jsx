import { Col, Form, FormGroup } from "reactstrap";
import { useRef } from "react";
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef(null);  // Initialize with null for input elements
    const distanceRef = useRef(null);  // Initialize with null for input elements
    const maxGroupSizeRef = useRef(null);  // Initialize with null for input elements
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert('All fields are required!');
        }

        try {
            const res = await fetch(`http://localhost:8000/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

            if (!res.ok) {
                throw new Error('Something went wrong!');
            }

            const result = await res.json();

            navigate(`/tours/search/?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`  ,//(`tours/tourSearched/?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {
               { state: result.data
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <Col lg='12'>
            <div className="d-flex   search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are you going?" ref={locationRef}></input>
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance km" ref={distanceRef}></input>
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder="0" ref={maxGroupSizeRef}></input>
                        </div>
                    </FormGroup>
                </Form>
                <div>
                <span className="search__icon" onClick={searchHandler}><i className="ri-search-line"></i></span>
                <button className="monButton"  onClick={searchHandler}>Search</button>
                </div>
            </div>
        </Col>
    );
};

export default SearchBar;
