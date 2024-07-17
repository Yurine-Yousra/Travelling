import {Container , Row , Col , ListGroup , ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/besbes/outline-airplain-illustration.png'
import './Footer.css'

const Footer = () => {
    const nav__links = [
   
        {
            path : '/home',
            display : 'Home'
        },
        {
            path : '/about',
            display : ' About'
        },
        {
            path : '/tours',
            display : 'Tours'
        },
    ] 
    const nav__links1 = [
   
        
        {
            path : '/login',
            display : 'Login'
        },
        {
            path : '/register',
            display : 'Register'
        },
    ]  
    return (
        <Container>
            <Row>
                <Col>
                <div className="logo">
                    <img src={logo} alt="footer image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus nihil quaerat? Pariatur doloremque aperiam nesciunt quos, maxime dignissimos itaque sed ipsum ad ducimus corrupti, nostrum rerum eligendi, iste animi?</p>

                    <div className ='social__links d-flex align-items-center gap-4'>
                        <span>
                            <Link to="#"> <i className="ri-youtube-line"></i></Link>
                        </span>

                        <span>
                            <Link to="#"> <i className="ri-instagram-line"></i></Link>
                        </span>

                        <span>
                            <Link to="#"><i className="ri-linkedin-line"></i></Link>
                        </span>

                        <span>
                            <Link to="#"><i className="ri-github-line"></i></Link>
                        </span>
                        </div>
                </div>
                </Col>

                <Col lg='3'>
                <h5 className="footer__link-title">Discover</h5>
                <ListGroup className='footer__quick-links'>
                    {nav__links.map((item , index) => (
                        <ListGroupItem key={index} className='ps-0 border-0'>
                            <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                </Col>

                <Col lg='3' >
                <h5 className="footer__link-title">Quick Links</h5>
                <ListGroup className='footer__quick-links'>
                    {nav__links1.map((item , index) => (
                        <ListGroupItem key={index} className='ps-0 border-0'>
                            <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                </Col>

                <Col lg='6'>
                <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center   gap-3'>
                    <h6 className='mb-0 d-flex align-items-center '><span > <i className="ri-home-office-line icons"></i>Adress
                        </span></h6>
                        <a  className='pb-2'>Algeria , Oran</a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6><span> <i className="ri-contacts-line icons"></i>Contact
                        </span></h6>
                        <a className='pb-2' >Yousra Bouhriz Daidj </a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6><span> <i className="ri-mail-line icons"></i>Email
                        </span></h6>
                        <a href='mailto:@bouhrizdaidjyousra@gmail.com' className='pb-2'>@bouhrizdaidjyousra@gmail.com </a>
                </ListGroupItem>
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer