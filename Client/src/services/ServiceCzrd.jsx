import PropTypes from "prop-types";
import './Service.css'

const ServiceCrd = ({ item }) => {
    const { imageUrl, title, desc } = item;
    return (
        <div className="service__items">
            <div className="service__img">
                <img src={imageUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

ServiceCrd.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

export default ServiceCrd;
