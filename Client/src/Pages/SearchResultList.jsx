import  { useState, useEffect } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom"; // corrected import
import TourCard from "./../shared/TourCard";
import Newsletter from "./../shared/Newsletter";

const SearchResultList = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        // Update data state when location.state changes
        if (location.state) {
            setData(location.state);
            const pages = Math.ceil(location.state.length / 4); // Calculate pageCount based on location.state length
            setPageCount(pages);
            window.scrollTo( 0 , 0)
        }
    }, [location.state]);

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

    console.log(data);

    return (
        <>
            <CommonSection title={"Tour search result"} />
            <section>
                <Container>
                    <Row>
                        {data.length === 0 ? (
                            <h4 className="text-center">NO tour found</h4>
                        ) : (
                            data
                                .slice(page * 4, (page + 1) * 4) // Slice data array to show only 4 items per page
                                .map((tour) => (
                                    <Col className="mb-4" key={tour._id}>
                                        <TourCard tour={tour} />
                                    </Col>
                                ))
                        )}
                    </Row>
                    {pageCount > 1 && (
                        <Row>
                            <Col lg="12">
                                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map((number) => (
                                        <span
                                            key={number}
                                            onClick={() => handlePageClick(number)}
                                            className={page === number ? "active__page" : ""}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
                <Newsletter />
            </section>
        </>
    );
};

export default SearchResultList;
