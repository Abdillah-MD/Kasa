import PropTypes from 'prop-types'
import '../../style/component/slideShow.css'

function SlideShow({ pictures, title }) {
    return (
        <div className="slideShow">
            <img className="slideShow_img" src={pictures} alt={title} />
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    )
}

SlideShow.propTypes = {
    pictures: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default SlideShow
