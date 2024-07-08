import PropTypes from 'prop-types';
import './ImageGalleryCard.css'

const ImageGalleryCard = ({ item }) => {
    return (
        <img
            src={item}
            alt="image"  className='my__image'
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
        />
    );
};

ImageGalleryCard.propTypes = {
    item: PropTypes.string.isRequired
};

export default ImageGalleryCard;
