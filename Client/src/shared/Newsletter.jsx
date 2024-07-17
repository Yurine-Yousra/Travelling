import './Newsletter.css'
import { Container, Row , Col } from 'reactstrap'
import {Link} from  'react-router-dom'
import Image from '../assets/besbes/handsome-business-man-wearing-suit-pointing-with-fingers-side-looking-camera-with-smile-face-standing-white-background.png'
const Newsletter = () => {
    return(
        <section className='news__letter'>
            <Container>
                <Row>
                    <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Know more about us</h2>
                        <div className="newsletter__input">
                            <button className="btn newsletter__btn"><Link to="/about">Discover More</Link></button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde dolore quia. Eligendi earum aliquid voluptas officia, fugit praesentium. Amet deleniti nemo autem incidunt esse aliquam soluta perferendis voluptates numquam!</p>   
                    </div>
                    </Col>
                    <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={Image} alt="image"  />
                    </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Newsletter