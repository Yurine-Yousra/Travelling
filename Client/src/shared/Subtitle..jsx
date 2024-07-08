import PropTypes from 'prop-types'
import './Subtitle.css'
const Subtitle  = ({subtitles}) => {
    return <button className='my_btn'>{subtitles}</button>
}

Subtitle.propTypes = {
    subtitles : PropTypes.string.isRequired
}

export default Subtitle