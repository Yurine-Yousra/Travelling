import Slider from 'react-slick'
import ava01 from '../.././assets/besbes/5907.jpg'



const Testimonial = () => {
    const settings ={
        dots : true,
        infinite: true,
        autoplay : true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        

        responsive : [
            {
                breakpoint : 992,
                settings :{
                    slidesToShow :2,
                    slidesToScroll :1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint :576,
                settings :{
                    slidesToShow :1,
                    slidesToScroll :1,
                
                } 
            }
        ]
    }
    return <Slider {...settings}>
                <div className="testimonial py-4 px-3 ">
                                        <p>Booking our tour through Traveli was the best decision we made! From start to finish, every detail was taken care of, allowing us to fully immerse ourselves in the adventure</p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user one</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                <p>I have used several tour booking platforms, but none compare to the ease and efficiency of Traveli. Booking was simple, and their customer service was exceptional!</p>                   
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user wo</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Thanks to Traveli, our family vacation was unforgettable. They helped us find the perfect tour that catered to everyone s interests, making it a truly memorable experience.</p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user three</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>The tours recommended by Traveli exceeded all expectations. Each tour was expertly curated, showcasing the best of every destination we visited.
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user four</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>I trust Traveli for all my travel bookings. Their extensive selection of tours and reliable service ensure that every trip is smooth and stress-free.
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user five</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>What sets Traveli apart is their personalized service. They listened to our preferences and crafted a tailor-made itinerary that perfectly matched our needs.
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user six</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Booking with Traveli was incredibly smooth. Their user-friendly interface and transparent pricing made it easy to plan our dream vacation.
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">user seven</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>
    </Slider>
}

export default Testimonial