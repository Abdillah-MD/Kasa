import PropTypes from 'prop-types'
import redStar from '../../assets/redStar.svg'
import grayStar from '../../assets/grayStar.svg'

function Etoiles({ rating }) {
    return (
        <>
            <img src={rating >= 1 ? redStar : grayStar} alt="étoile" />

            <img src={rating >= 2 ? redStar : grayStar} alt="étoile" />

            <img src={rating >= 3 ? redStar : grayStar} alt="étoile" />

            <img src={rating >= 4 ? redStar : grayStar} alt="étoile" />

            <img src={rating >= 5 ? redStar : grayStar} alt="étoile" />
        </>
    )
}

Etoiles.propTypes = {
    rating: PropTypes.number,
}

export default Etoiles
