import PropTypes from "prop-types";
import './Service.css'

const ServiceCrd = ({ item }) => {
    const { imageUrl, title, desc } = item;
    return (
        <div  className="service__items align-items-start gap-4"   style={{ 
            width: '300px', 
            maxWidth: '100%', // Ensures the card takes full width when viewport is smaller
            margin: 'auto',   // Centers the card horizontally
            '@media (max-width: 900px)': { // Media query for viewport width <= 500px
                width: '100%', // Sets the width to 100% for smaller screens
            } 
        }}>
        <span><i className={imageUrl}></i> </span> 
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
