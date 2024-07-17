import '../styles/About.css'
import image1 from '../assets/besbes/3293468.jpg'
import image2 from '../assets/besbes/9848425.jpg'
import image3 from  '../assets/besbes/flat-contact-us-background.png'
import image4 from '../assets/besbes/flat-people-holding-question-marks.png'
import {Container , Row ,Col} from 'reactstrap'
const About = () => {
    return(
        <>
        <Container>
            <Row className='mb-4'>
             <Col className='coucou'>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div className="infos">
                    <h1>Welcome to</h1>
                    <p>At , we believe that travel is more than just going from one place to another. It is about discovering new cultures, creating lifelong memories, and expanding your horizons. Whether you are planning a relaxing beach getaway, an adventurous trek through the mountains, or a cultural tour of historic cities, we are here to make your travel dreams a reality.</p>
                </div>
             </Col>
             <Col className="coucou">
                <div>
                    <img src={image2} alt="" />
                </div>
                <div className="infos">
                    <h1>Who Are We</h1>
                    <p>Our traveling agency is a leading platform for travelers seeking unforgettable experiences around the globe. With years of experience and a passion for travel, our team is dedicated to providing personalized service and expert advice to help you plan the perfect trip. From booking flights and accommodations to arranging tours and activities, we handle all the details so you can focus on enjoying your journey.</p>
                </div>
             </Col>
             <Col className="coucou">
                <div>
                    <img src={image4} alt="" />
                </div>
                <div className="infos">
                    <h1>What We Offer</h1>
                    <p>Our mission is to inspire and empower travelers to explore the world with confidence. We believe in creating meaningful connections between people and places, promoting sustainable tourism practices, and enriching lives through transformative travel experiences.</p>
                </div>
             </Col>
             <Col className="coucou">
                <div>
                    <img src={image3} alt="" />
                </div>
                <div className="infos">
                    <h1>Get In Touch</h1>
                    <p>Ready to embark on your next adventure? Contact us today to start planning your journey . Whether you are traveling solo, with family, or organizing a group tour, we are here to make your travel dreams come true.

Join us as we explore the world together!</p>
                </div>
             </Col>
             </Row>
             </Container>
             </>
       
    )
}

export default  About