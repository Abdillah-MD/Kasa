import PropTypes from 'prop-types'
// import { locationList } from '../../Data/LocationList'
import '../../style/component/infoAppart.css'

function InfoAppart({ title, location, tag, name, picture, rating }) {
    return (
        <article className="info">
            <div className="info_titleAppart">
                <h1 className="appTitle">{title}</h1>
                <p>{location}</p>
                {/* {locationList.map(({ tag }) => (
                    <p key={tag}>{tag}</p>
                ))} */}
                <p>{tag}</p>
            </div>
            <div className="info_NameRatio">
                <div className="proprio">
                    <p>{name}</p>
                    <img className="profilPicture" src={picture} alt={name} />
                </div>
                <div className="rating_note">{rating}</div>
            </div>
        </article>
    )
}

InfoAppart.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tag: PropTypes.string, // Ajouter is required quand j'aurai trouver la solution
    rating: PropTypes.number, // Ajouter is required quand j'aurai trouver la solution
}

export default InfoAppart
