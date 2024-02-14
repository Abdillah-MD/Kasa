import PropTypes from 'prop-types'
// import { locationList } from '../../Data/LocationList'
import '../../style/component/infoAppart.css'
import Etoile from './Etoiles'

function InfoAppart({ title, location, tags, name, picture, rating }) {
    return (
        <article className="info">
            <div className="info_titleAppart">
                <h1 className="appTitle">{title}</h1>
                <p>{location}</p>
                <div>
                    {tags.map((tag, i) => (
                        <span key={i} className="info_titleAppart-tags">
                            {tag}
                        </span>
                    ))}
                </div>
                {/* <p>{tag}</p> */}
            </div>
            <div className="info_NameRatio">
                <div className="proprio">
                    <>
                        {
                            <ul
                                style={{
                                    listStyleType: 'none',
                                    padding: `0 10px 0 0`,
                                    margin: 0,
                                    color: '#ff6060',
                                    fontWeight: 'bold',
                                }}
                            >
                                {name.split(/\s+/).map((part, index) => (
                                    <li key={index}>{part}</li>
                                ))}
                            </ul>
                        }
                    </>
                    <img className="profilPicture" src={picture} alt={name} />
                </div>
                <div className="rating_note">
                    <Etoile rating={rating} />
                </div>
            </div>
        </article>
    )
}

InfoAppart.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.array, // Ajouter is required quand j'aurai trouver la solution
    rating: PropTypes.number, // Ajouter is required quand j'aurai trouver la solution
}

export default InfoAppart
