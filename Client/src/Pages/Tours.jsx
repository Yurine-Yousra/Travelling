import { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

const Tour = () => {
    const [allTours, setAllTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const res = await fetch('https://travelwebsiteserver.onrender.com/tours');
                if (!res.ok) {
                    throw new Error('Failed to fetch tours');
                }
                const result = await res.json();
                setAllTours(result.data);
            } catch (error) {
                console.error('Error fetching tours:', error);
                // Handle error state if needed
            }
        };

        fetchTours();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            <CommonSection title="All Tours" />
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
                        {allTours.map((tour, index) => (
                            <Col lg="3" key={index}>
                                <TourCard tour={tour} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Newsletter />
            </section>
        </>
    );
};

export default Tour;
