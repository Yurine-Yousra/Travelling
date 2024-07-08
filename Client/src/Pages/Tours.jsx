import CommonSection from "../shared/CommonSection";
import '../styles/tour.css';
import SearchBar from '../shared/SearchBar';
import TourCrd from '../shared/TourCard';
import NewsLetter from '../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

const Tour = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const { data: AllTours, error, loading } = useFetch(`${BASE_URL}/tours/AllTours`);
    
    useEffect(() => {
        if (AllTours) {
            const pages = Math.ceil(AllTours.length / 4);
            setPageCount(pages);
        }
    }, [AllTours]);

    if (loading) {
        return <p>Loading...</p>; // Display a loading indicator while fetching data
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Display an error message if fetching fails
    }

    return (
        <>
            <CommonSection title={"All Tours"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {AllTours.map((tour, index) => (
                            <Col lg='3' key={index}>
                                <TourCrd tour={tour} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number => (
                                    <span
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={page === number ? "active__page" : ""}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <NewsLetter />
            </section>
        </>
    );
};

export default Tour;
