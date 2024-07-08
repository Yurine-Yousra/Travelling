import Slider from 'react-slick'
import ava01 from '../.././assets/besbes/beautiful-view-plaza-de-espana-seville-spain.jpg'
import ava02 from '../.././assets/besbes/beautiful-view-plaza-de-espana-seville-spain.jpg'
import ava03 from '../.././assets/besbes/beautiful-view-plaza-de-espana-seville-spain.jpg'



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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava01}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava02}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>

                <div className="testimonial py-4 px-3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non id voluptatibus sequi repellendus atque impedit, sed facere consequuntur maiores, rerum modi in, soluta unde repellat omnis placeat perspiciatis deserunt?
                    </p>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        <img src={ava03}  className='w-25 h-25 rounded-2'alt="image" />
                        <div>
                            <h5 className="mb-0 mt-3">JohnDoe</h5>
                            <p>Customer</p>
                        </div>

                    </div>
                </div>
    </Slider>
}

export default Testimonial