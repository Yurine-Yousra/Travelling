import {Col , Form , FormGroup} from "reactstrap"
import { useRef } from "react"
import './SearchBar.css'
const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupeSizeRef = useRef(0)

    const  searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const MaxGroupeSize = maxGroupeSizeRef.current.value

        if(location === "" || distance === "" || MaxGroupeSize === ""){
            return alert('All fields Are Required !')
        }
    }
    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__groupe form__groupe-fast">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are ou going ?"  ref={locationRef}></input>
                        </div>
                    </FormGroup>



                    <FormGroup className="d-flex gap-3 form__groupe form__groupe-fast">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance k/m" ref={distanceRef}></input>
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__groupe form__groupe-last">
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max Peope</h6>
                            <input type="number" placeholder="0" ref={maxGroupeSizeRef}></input>
                        </div>
                        <span className="search__idon" type='submit' onClick={searchHandler}><i className="ri-search-line"></i></span>
                    </FormGroup>
            </Form>

        </div>
    </Col>
}

export default SearchBar