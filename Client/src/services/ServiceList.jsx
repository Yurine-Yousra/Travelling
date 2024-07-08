

import ServiceCrd from './ServiceCzrd'; // Correct the import path if necessary
import Image1 from '../assets/cloud-line.png';
import Image2 from '../assets//guide-line.png';
import Image3 from '../assets/screenshot-line.png';
import './Service.css'
const serviceData = [
    {
        imageUrl: Image1,
        title: 'destination One',
        desc: 'lorem lorem hello helloo'
    },
    {
        imageUrl: Image2,
        title: 'destination Two',
        desc: 'lorem lorem hello helloo'
    },
    {
        imageUrl: Image3,
        title: 'destination Three',
        desc: 'lorem lorem hello helloo'
    }
];

const ServiceList = () => {
    return (
        <div className='hellohello'>
                <img src={Image1} alt="" />
                {serviceData.map((item, index) => (
                    <div  key={index}>
                        <ServiceCrd item={item} />
                    </div>
                ))}
        </div>
    );
};

export default ServiceList;
