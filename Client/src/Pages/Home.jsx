import '../styles/home.css'
import {Container , Row , Col} from 'reactstrap'
import HeroImg from '../assets/ancient-sandstone-ruins-majestic-architecture-eroded-rock-formations-generated-by-ai.jpg'
import HeroImg1 from '../assets/eiffel-tower-paris-best-destinations-europe.jpg'
import HeroVideo from '../assets/last video.mp4'
import Subtitle from '../shared/Subtitle.'
import World from '../assets/earth.png'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTours from '../components/Featured-tours/FeaturedTours'
import MansoryImagesGallery from '../components/GalleryTour/GalleryImagesList'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className='hero__content'>
                    <div className="hero_subtitle d-flex align-items-center">
                        <Subtitle  subtitles={'Know Befor You Go'} />
                        <img src={World} alt='view' className='heello'></img>
                    </div>
                    <h1>
                        Traveling opens the doors tp creating {" "} <span className="highlight">memories</span>
                    </h1>
                    <p>Welcome to Travel The World, your gateway to unforgettable travel experiences. Discover a curated selection of tours tailored to diverse interests, book with ease, and connect with a community of passionate travelers</p>
                </div>
                </Col>

                <Col lg='2'>
                <div className="hero__image-box ">
                    <img src={HeroImg} alt="img" />
                </div>
                </Col>
                <Col lg='2'>
                <div className="hero__image-box mt-4">
                    <img src={
                        HeroImg1
                    } alt="img" />
                </div>
                </Col>
                <Col lg='2'>
                <div className="hero__video-box mt-5">
                    <video src={HeroVideo} alt="vido"  controls/>
                </div>
                </Col>
                <SearchBar />
            </Row>
        </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <Col lg='9'   mg="6" sm="12"  >
                    <ServiceList  />
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitles={"Explore"}></Subtitle>
                    <h2 className="featured_tour_title">Our featured tours</h2>
                    </Col>
                    <FeaturedTours></FeaturedTours>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitles={"Experiences"}></Subtitle>
                        <h2>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat a doloribus, necessitatibus odio eveniet. Magni laboriosam enim minima vel?<br /> Pariatur porro vel reiciendis illum optio dolor impedit perspiciatis quaerat?</p>
                    </div>

                    <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className="counter__box">
                            <span>+12k</span>
                            <h6>Succesful Trip</h6>
                        </div>

                        <div className="counter__box">
                            <span>+12k</span>
                            <h6>Regular</h6>
                        </div>

                        <div className="counter__box">
                            <span>15</span>
                            <h6>Years experience </h6>
                        </div>
                    </div>
                    </Col>
                    <Col lg='6'>
                    <div className="experience__img">
                            <img src={World} style={{"height":"100%"}}alt="image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                            <Subtitle subtitles={'Gallery'}></Subtitle>
                            <h2 className="gallery__title">Visit Our Customer Tour Gallery</h2>
                    </Col>
                    <Col>
                    <MansoryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitles={'Fans Love'}></Subtitle>
                    <h2 className="testimonial__title">What our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                    <Testimonial />
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter></Newsletter>

        </>
}

export default Home