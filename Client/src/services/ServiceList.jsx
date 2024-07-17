import ServiceCrd from './ServiceCzrd';
import './Service.css';

const serviceData = [
    {
        imageUrl: "ri-ancient-gate-line",
        title: 'Explore Our Diverse Tours',
        desc: 'Explore our diverse selection of tours, from scenic hikes to culinary adventures, promising unforgettable memories. Immerse yourself in local cultures, uncover hidden gems, and enjoy authentic experiences guided by passionate explorers.'
    },
    {
        imageUrl: "ri-suitcase-2-line",
        title: 'Tailored Experiences for Every Traveler',
        desc: 'We cater to the uniqueness of every traveler with customizable tour options tailored to your preferences and schedule, whether you are solo, with family, or in a group. Our flexible booking system ensures you find the perfect tour that matches your interests and requirements seamlessly.'
    },
    {
        imageUrl: "ri-bookmark-line",
        title: 'Book with Confidence',
        desc: 'Booking with Us is straightforward and secure thanks to our intuitive interface, enabling you to browse tours, check availability, and make reservations effortlessly. Benefit from transparent pricing, detailed tour descriptions, and dedicated customer support ensuring a worry-free journey from start to finish.'
    }
];

const ServiceList = () => {
    return (
        <div className='services d-flex'>
                {serviceData.map((item, index) => (
                    <div className='mb-4 ' key={index}>
                        <ServiceCrd item={item} />
                    </div>
                ))}
        </div>
    );
};

export default ServiceList;
